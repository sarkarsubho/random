import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  let token = localStorage.getItem("token");
  // console.log(isAuth,token)
  const location = useLocation();
  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
  }
};
