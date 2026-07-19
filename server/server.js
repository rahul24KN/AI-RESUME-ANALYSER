
const express = require("express");

const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");


// Route Imports
const authRoutes = require(
  "./routes/authRoutes"
);

const resumeRoutes = require(
  "./routes/resumeRoutes"
);

const dashboardRoutes = require(
  "./routes/dashboardRoutes"
);

const recruiterRoutes = require(
  "./routes/recruiterRoutes"
);

const interviewRoutes = require(
  "./routes/interviewRoutes"
);

const analyticsRoutes = require(
  "./routes/analyticsRoutes"
);


const path = require("path");

// Initialize Express App
const app = express();


// Connect Database
connectDB();


// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));


// API Routes
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/resume",
  resumeRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/recruiter",
  recruiterRoutes
);

app.use(
  "/api/interview",
  interviewRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

// Root Route
app.get("/", (req, res) => {

  res.status(200).json({
    message:
      "AI Resume Analyzer API Running",
  });
});


// Global Error Handler
app.use((err, req, res, next) => {

  console.log(err);

  res.status(500).json({
    message:
      "Internal Server Error",
  });
});


app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);


// Start Server
const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});
