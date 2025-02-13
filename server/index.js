const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 9000;
const app = express();

app.use(
  cors({
    origin: "https://solo-shaper.web.app",
    credentials: true, // Allows sending cookies if needed
  })
);
app.use(express.json());
app.use(cookieParser())

const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("solo-db");
    const jobCollections = db.collection("jobs");
    const bidsCollections = db.collection("bids");
    //generate cookie
    app.post("/jwt", (req, res) => {
      const email = req.body.email;
      // console.log(email);
      if (!email) {
        return console.log("here error you know");
      }
      const token = jwt.sign({ email }, process.env.SECRET_TOKE, {
        expiresIn: "1h",
      });

      // console.log(token);
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    //logout and clear cookie data
    app.get("/logout", async (req, res) => {
      res
        .clearCookie("token", {
          maxAge: 0,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });


    //verify token
    

    //save job data
    app.post("/add-job", async (req, res) => {
      const data = req.body;
      const result = await jobCollections.insertOne(data);
      res.send(result);
    });

    //jobs by specific email
    app.get("/jobs/:email", async (req, res) => {
      const email = req.params.email;
      // console.log(email);
      const query = { "buyer.email": email };

      // console.log(query);
      const data = await jobCollections.find(query).toArray();
      res.send(data);
    });

    //all jobs api
    // app.get("/jobs", async (req, res) => {
    //   const filter = req.query.filter;
    //   // console.log(filter)
    //   const search = req.query.search;
    //   console.log(search);
    //   if (!search) return console.log("null search");
    //   const sort = req.query.sort;
    //   // console.log(search)
    //   let query = {
    //     title: {
    //       $regex: search,
    //       $options: "i",
    //     },
    //   };
    //   if (filter) {
    //     query.category = filter;
    //   }

    //   let options = {};
    //   if (sort) {
    //     options = {
    //       sort: {
    //         deadline: sort == "asc" ? 1 : -1,
    //       },
    //     };
    //   }

    //   try {
    //     const data = await jobCollections.find(query, options).toArray();
    //     res.send(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });

    app.get("/jobs", async (req, res) => {
      const filter = req.query.filter || "";
      const search = req.query.search || "";
      const sort = req.query.sort || "";

      // console.log("Received Query Params:", { filter, search, sort });

      let query = {
        title: { $regex: search, $options: "i" },
      };

      if (filter) {
        query.category = filter;
      }

      let cursor = jobCollections.find(query);

      if (sort) {
        cursor = cursor.sort({ deadline: sort === "asc" ? 1 : -1 });
      }

      try {
        const data = await cursor.toArray();
        res.send(data);
      } catch (error) {
        // console.log("Error fetching jobs:", error);
        res.status(500).send({ error: "Failed to fetch jobs" });
      }
    });

    //delete job post
    app.delete("/deletejob/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await jobCollections.deleteOne(query);
      res.send(result);
      // console.log(id);
    });

    //get single job
    app.get("/job/:id", async (req, res) => {
      const id = req.params.id;
      // console.log("from job?:id", id);
      const query = { _id: new ObjectId(id) };
      const result = await jobCollections.findOne(query);
      res.send(result);
    });

    //update job
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const updatejob = {
        $set: jobData,
      };
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const result = await jobCollections.updateOne(query, updatejob, options);
      console.log(result);
      res.send(result);
    });

    //bid colllection
    app.post("/bid", async (req, res) => {
      const data = await req.body;
      console.log(data.buyer);
      //check user if he already bid the data
      const userQuery = { buyer: data.buyer, jobId: data.jobId };
      // console.log(emailQuery);
      const alreadyExist = await bidsCollections.findOne(userQuery);
      console.log(alreadyExist);
      if (alreadyExist) {
        return res
          .status(400)
          .json({ message: "You have already bid on this job post." });
      }

      //save data in bids collections
      const result = await bidsCollections.insertOne(data);

      //increase bid count
      const query = { _id: new ObjectId(data.jobId) };
      const updateDoc = {
        $inc: {
          bid_count: 1,
        },
      };
      const filter = await jobCollections.updateOne(query, updateDoc);

      // console.log(filter);

      res.send({ result, filter });
    });

    //bid collection for a user
    app.get("/bids/:email", async (req, res) => {
      const email = req.params.email;
      console.log(email);
      const query = { buyer: email };
      const result = await bidsCollections.find(query).toArray();
      res.send(result);
    });

    //Bid delete
    app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bidsCollections.deleteOne(query);
      res.send(result);
    });

    //bid requrest
    app.get("/request/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await bidsCollections.find(query).toArray();
      res.send(result);
    });

    //bid status update
    app.patch("/update/:id", async (req, res) => {
      const id = req.params.id;
      const status = req.body.status;
      console.log({ id, status });
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          status: status,
        },
      };

      const result = await bidsCollections.updateOne(query, update);
      console.log(result);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Hello from SoloSphere Server....");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
