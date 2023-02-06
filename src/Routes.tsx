import React from "react";
import { Routes, Route } from "react-router-dom";

import Dash from "./pages/Dash";

import SignIn from "./pages/SignIn";

const Root = () => {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    );
  };

export default Root