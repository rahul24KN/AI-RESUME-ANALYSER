
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadResume from "./pages/UploadResume";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import Analytics from "./pages/Analytics";
import MockInterview from "./pages/MockInterview";

import ProtectedRoute from
  "./components/ProtectedRoute";

import CandidateDashboard from "./pages/CandidateDashboard";


function App() {

  return (

    <Routes>
      <Route
  path="/"
  element={<Home />}
/>

      {/* PUBLIC */}
      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* CANDIDATE */}
      <Route
        path="/upload"
        element={
          <ProtectedRoute role="candidate">

            <UploadResume />

          </ProtectedRoute>
        }
      />

      <Route
        path="/mock-interview"
        element={
          <ProtectedRoute role="candidate">

            <MockInterview />

          </ProtectedRoute>
        }
      />


      {/* RECRUITER */}
      <Route
        path="/recruiter"
        element={
          <ProtectedRoute role="recruiter">

            <RecruiterDashboard />

          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute role="recruiter">

            <Analytics />

          </ProtectedRoute>
        }
      />

      <Route
        path="/candidate-dashboard"
        element={
        <ProtectedRoute role="candidate">
          <CandidateDashboard />
          
        </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
