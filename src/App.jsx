import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import Header from "./components/Header/Header";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />
          <Route path="/warehouses" element={<WarehousePage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
          <Route path="/inventory/:id/edit" element={<EditInventoryPage />} />
          <Route path="/add-inventory" element={<AddInventoryPage />} />
          <Route path="/add-warehouse" element={<AddWarehousePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
