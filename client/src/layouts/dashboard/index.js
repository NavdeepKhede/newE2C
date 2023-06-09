import React from "react";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";


const DashboardLayout = () => {
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
