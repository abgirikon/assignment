import React, { useEffect, useState} from "react";
import { Route, Routes , Navigate, useNavigate, useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Dashboard from "../pages/Profile/Dashboard";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
 
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const PrivateRoute = ({ open }) => {
  const [ongoingOperation, setOngoingOperation] = useState(null);
  const [ongoingSuites, setOngoingSuites] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Main open={open}>
      
        <DrawerHeader />
        
    <Routes> 
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<Navigate to={`/dashboard`} replace />} />
    </Routes>
    </Main>
  );
};

export default PrivateRoute;
