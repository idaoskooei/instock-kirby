import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";
import "./WarehousePage.scss";

const WarehousePage = () => {
    const URL = import.meta.env.VITE_APP_BASE_URL;
    const [warehouses, setWarehouses] = useState([]);

    const findWarehousesAll = async () => {
        try {
            const response = await axios.get(`${URL}/api/warehouses`);
            setWarehouses(response.data);
        } catch (e) {
            console.error("Error fetching warehouses:", e);
        }
    };

    const findWarehousesSearch = async (search) => {
        try {
            const response = await axios.get(
                `${URL}/api/warehouses?s=${search}`
            );
            setWarehouses(response.data);
        } catch (e) {
            console.error("Error fetching searched warehouses:", e);
        }
    };

    const handleSearchSubmit = (searchTerm) => {
        if (searchTerm) {
            console.log(searchTerm);
            findWarehousesSearch(searchTerm);
        } else {
            findWarehousesAll();
        }
    };

    useEffect(() => {
        findWarehousesAll();
    }, []);

    return (
        <>
            <MainPageHeader
                title="Warehouses"
                addButtonText="+ Add New Warehouses"
                addButtonLink="/add-warehouse"
                onSearchSubmit={handleSearchSubmit}
            />
            <WarehouseList warehouses={warehouses} />
        </>
    );
};

export default WarehousePage;
