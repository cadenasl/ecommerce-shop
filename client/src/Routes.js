import { Route, Routes } from "react-router-dom";
import Login from "./Onboarding/pages/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
export default AppRoutes;
