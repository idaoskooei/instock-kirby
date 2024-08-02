import "./App.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

import WarehousePage from "./pages/WarehousePage/WarehousePage";
// import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
// import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
// import InventoryPage from "./pages/InventoryPage/InventoryPage";
// import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
// import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
// import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
// import DeleteInventory from "./pages/DeleteInventory/DeleteInventory"; 

function App() {
  return (
    <BrowserRouter>
      <section className="browser-container">
        <Header />
        <div className="routes-container">
          <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />
          <Route path="/warehouses" element={<WarehousePage />} />
          {/* <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} /> */}
          {/* <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} /> */}
          {/* <Route path="/inventory" element={<InventoryPage />} /> */}
          {/* <Route path="/inventory/:id" element={<InventoryDetailsPage />} /> */}
          {/* <Route path="/inventory/:id/edit" element={<EditInventoryPage />} /> */}
          {/* <Route path="/add-inventory" element={<AddInventoryPage />} /> */}
          <Route path="/add-warehouse" element={<AddWarehousePage />} />
          {/* <Route path="/inventory/:id/delete" element={<DeleteInventory />} /> */}
          </Routes>
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}
export default App;