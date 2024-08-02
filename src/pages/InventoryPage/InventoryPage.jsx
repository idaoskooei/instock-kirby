import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";
import Footer from "../../components/Footer/Footer";

const InventoryPage = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const URL = import.meta.env.VITE_APP_BASE_URL;

    const findInventoriesSearch = async (search) => {
        try {
            const response = await axios.get(
                `${URL}/api/inventories?s=${search}`
            );
            setInventoryItems(response.data);
        } catch (e) {
            console.error("Error fetching searched inventory:", e);
        }
    };

    const handleSearchSubmit = (searchTerm) => {
        if (searchTerm) {
            console.log(searchTerm);
            findInventoriesSearch(searchTerm);
        } else {
            fetchInventory();
        }
    };

    const fetchInventory = async () => {
        try {
            const response = await axios.get(`${URL}/api/inventories`);
            const items = response.data;
            setInventoryItems(items);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInventory();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <MainPageHeader
                title="Inventory"
                addButtonText="+ Add New Item"
                addButtonLink="/add-inventory"
                onSearchSubmit={handleSearchSubmit}
            />
            <InventoryList inventoryItems={inventoryItems} />
            <Footer />
        </div>
    );
};

export default InventoryPage;
