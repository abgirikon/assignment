import { Route, Routes , Navigate } from "react-router-dom";
import SiginIn from "../pages/SiginIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/EntryPoint/forgotPassword";
import ResetPassword from "../pages/EntryPoint/ResetPassword";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SiginIn />}  />
      <Route path="/signup" element={<SignUp />} exact />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/reset-password/:token/:email" element={<ResetPassword/>} />
      <Route path="*" element={<Navigate to={`/signin`} replace />} /> 
    </Routes>
  );
};

export default PublicRoute;
