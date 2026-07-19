
import {
  Navigate,
} from "react-router-dom";


function ProtectedRoute({

  children,

  role,
}) {

  // GET TOKEN
  const token =
    localStorage.getItem(
      "token"
    );


  // GET ROLE
  const userRole =
    localStorage.getItem(
      "role"
    );


  // NOT LOGGED IN
  if (!token) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }


  // ROLE NOT MATCHED
  if (
    role &&
    userRole !== role
  ) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }


  // ALLOW ACCESS
  return children;
}

export default ProtectedRoute;
