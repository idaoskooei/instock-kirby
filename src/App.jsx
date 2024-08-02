import "./App.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryFormPage from "./pages/InventoryFormPage/InventoryFormPage";

function App() {
    return (
        <BrowserRouter>
            <section className="browser-container">
                <Header />
                <div className="routes-container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/warehouses" />}
                        />
                        <Route path="/warehouses" element={<WarehousePage />} />
                        <Route
                            path="/warehouses/:id"
                            element={<WarehouseDetailsPage />}
                        />
                        <Route
                            path="/warehouses/edit/:id"
                            element={<EditWarehousePage />}
                        />
                        <Route path="/inventory" element={<InventoryPage />} />
                        <Route
                            path="/inventory/:id"
                            element={<InventoryDetailsPage />}
                        />
                        <Route
                            path="/inventory/:id/edit"
                            element={<InventoryFormPage />}
                        />
                        <Route
                            path="/add-inventory"
                            element={<InventoryFormPage />}
                        />
                        <Route
                            path="/add-warehouse"
                            element={<AddWarehousePage />}
                        />
                    </Routes>
                </div>
                <Footer />
            </section>
        </BrowserRouter>
    );
}
export default App;
