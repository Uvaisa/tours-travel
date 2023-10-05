import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AdminAuthContext } from "../content/adminAuthContext";
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { admin } = useContext(AdminAuthContext);

  return <>{admin ? <Outlet /> : <Navigate to="/admin" />}</>;
};

export default ProtectedRoute;
