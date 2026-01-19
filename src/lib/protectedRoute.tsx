import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("user"); // Check for token
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
