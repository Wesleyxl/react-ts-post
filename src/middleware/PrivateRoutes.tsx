import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  // get token from localStorage
  const token = localStorage.getItem("access_token");

  if (!token || token === "" || token === undefined) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

function UnPrivateRoute() {
  // get token from localStorage
  const token = localStorage.getItem("access_token");

  if (!token || token === "" || token === undefined) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
}

export { PrivateRoute, UnPrivateRoute };
