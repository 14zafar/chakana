import { Route, Routes } from "react-router-dom";
import Kirish from "../Kirish";
import Register from "../auth/Register";
import Login from "../auth/Login";

const PublicRoutes = () => {
  return (
    <div>
      <Kirish />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default PublicRoutes;
