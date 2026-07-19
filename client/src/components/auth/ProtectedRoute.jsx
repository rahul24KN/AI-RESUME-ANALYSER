import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please log in to access this page.", { id: "auth-guard-login" });
    } else if (allowedRoles && !allowedRoles.includes(user?.role)) {
      toast.error("Access denied. You do not have permissions for this section.", { id: "auth-guard-role" });
    }
  }, [isAuthenticated, user, allowedRoles]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    // Redirect user to their default landing page
    if (user?.role === "recruiter") {
      return <Navigate to="/recruiter/dashboard" replace />;
    } else if (user?.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
}
