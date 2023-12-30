import { useState } from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import axios from "./Axios/axios.js";
import Login from "./Login.jsx";
import DashBoard from "./Dashboard.jsx";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
