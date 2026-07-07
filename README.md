# SoloSphere (Job Circular Application)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-solo--sphere--eta.vercel.app-brightgreen?style=for-the-badge)](https://solo-sphere-eta.vercel.app/)

SoloSphere is a modern, responsive job circular and bidding platform. It allows clients (buyers) to post jobs across various categories (Web Development, Graphics Design, and Digital Marketing) and enables freelancers to bid on these jobs.

## Features

- **Browse by Category**: Easily search and filter jobs using an interactive tabbed interface.
- **Job Bidding**: Freelancers can place custom bids on available postings.
- **Secure Authentication**: Authentication powered by Firebase (Google Sign-In).
- **CRUD Operations**: Complete management of job posts (Create, Read, Update, Delete) and bid requests.
- **Responsive Layout**: Stunning premium design optimized for desktop and mobile layouts.

---

## Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS & DaisyUI
- **Routing**: React Router DOM
- **Authentication**: Firebase Authentication
- **State & Utilities**: Axios, Date-fns, Swiper

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB (via official MongoDB NodeJS driver)
- **Token Security**: JSON Web Token (JWT) cookie-based authentication
- **Deployment**: Vercel Node runtime configuration

---

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local installation

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/siyam-io/job-circuler.git
   cd job-circuler
   ```

2. **Configure Backend Environment Variables**
   Create a `.env` file inside the `server/` directory:
   ```env
   PORT=9000
   MONGO_URI=your_mongodb_connection_string
   SECRET_TOKE=your_jwt_secret_token
   NODE_ENV=development
   ```

3. **Configure Frontend Environment Variables**
   Create a `.env` file inside the `client/` directory:
   ```env
   VITE_API_URL=http://localhost:9000
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   ```

4. **Install Dependencies and Run Locally**

   - **For Server:**
     ```bash
     cd server
     npm install
     npm start
     ```

   - **For Client:**
     ```bash
     cd ../client
     npm install
     npm run dev
     ```
