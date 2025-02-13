import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { format, parseISO } from "date-fns";
import toast from "react-hot-toast";

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/request/${user?.email}`
      );
      console.log(data); // Log the data to inspect its structure
      setJobs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    }
  };

  const handleStatusChange = async (id, prevStatus, status) => {
    if (prevStatus === status || prevStatus === "Completed") {
      return toast.error("Action is not permitted");
    }

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update/${id}`,
        { status }
      );
      if (data) {
        toast.success("Status has been updated");
        fetchData(); // Refresh the data after updating the status
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleStatusReject = async (id, prevStatus, status) => {
    // console.table([id,prevStatus,status])
    if (prevStatus === "Rejected") {
      return toast.error("Action is not permitted");
    }
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update/${id}`,
        { status }
      );
      console.log(data);
      if (data) {
        toast.success("Status has been updated");
        fetchData(); // Refresh the data after updating the status
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-500"; // Blue
      case "Rejected":
        return "bg-red-100 text-red-500"; // Red
      case "Completed":
        return "bg-green-100 text-green-500"; // Green
      default:
        return "bg-gray-100 text-gray-500"; // Default Gray
    }
  };

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">Bid Requests</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {jobs.length} Requests
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.length > 0 ? (
                    jobs.map((job) => (
                      <tr
                        key={job._id}
                        className="bg-white divide-y divide-gray-200"
                      >
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {typeof job?.title === "string"
                            ? job.title
                            : "Invalid Title"}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {typeof job?.buyer === "string"
                            ? job.buyer
                            : "Invalid Buyer"}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {job?.deadline && typeof job.deadline === "string"
                            ? format(parseISO(job.deadline), "dd-MM-yyyy")
                            : "No Deadline"}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          $
                          {typeof job?.price === "number"
                            ? job.price
                            : "Invalid Price"}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60 text-xs">
                              {typeof job?.category === "string"
                                ? job.category
                                : "Invalid Category"}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${getStatusColor(
                              job?.status
                            )}`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                            <h2 className="text-sm font-normal">
                              {job?.status}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              disabled={
                                job?.status == "In Progress" ||
                                job?.status == "Completed"
                              }
                              onClick={() =>
                                handleStatusChange(
                                  job._id,
                                  job.status,
                                  "In Progress"
                                )
                              }
                              className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                            </button>
                            <button
                              disabled={
                                job?.status == "Rejected" ||
                                job?.status == "Completed"
                              }
                              onClick={() =>
                                handleStatusReject(
                                  job._id,
                                  job.status,
                                  "Rejected"
                                )
                              }
                              className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="text-center py-4 text-gray-500"
                      >
                        No jobs found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BidRequests;
