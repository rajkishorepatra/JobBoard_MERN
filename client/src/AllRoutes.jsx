import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AllRoutes;
