import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";

import { Home, Login, Register } from "./pages";

// import {
//   ProtectedRoute,
//   AdminRoute,
//   GeneralAdminRoute,
//   Authenticator,
// } from '@/components'

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Register />} />
        </Route>
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;
