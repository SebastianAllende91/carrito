import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "./paths";

const ProtectedRoutes = () => {
  const { isLogin } = useSelector((state) => state.LoginReducer);

  return isLogin ? <Outlet /> : <Navigate to={LOGIN} />;
};

export default ProtectedRoutes;
