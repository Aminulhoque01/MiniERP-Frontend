import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
 
import CreateSale from "../pages/sales/CreateSale";

import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductList from "../pages/product/ProductList";
 
 

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/products" element={<ProductList />} />

          <Route path="/sales" element={<CreateSale />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;