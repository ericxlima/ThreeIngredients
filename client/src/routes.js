import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { Home, Login, Cadastro } from "./pages";

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
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={`<div>404</div>`} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;
