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

function App() {
  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  )
}

export default App;
