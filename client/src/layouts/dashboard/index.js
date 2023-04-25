import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";


const DashboardLayout = () => {
  const dispatch = useDispatch();

  // const { isLoggedIn } = useSelector((state) => state.auth);


  // if (!isLoggedIn) {
  //   return <Navigate to="/auth/login" />;
  // }
  
  return (
    <Stack direction={"row"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
