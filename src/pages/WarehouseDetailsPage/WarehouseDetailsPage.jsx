import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import DetailsPageHeader from "../../components/DetailsPageHeader/DetailsPageHeader";

const WarehouseDetailsPage = () => {

    const [warehouse, setWarehouse] = useState(null);
    const { id } = useParams();

    const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

    const getSelectedWarehouse = async (id) => {
        try {
            let response = await axios.get(
                `${API_BASE_URL}/api/warehouses/${id}`
            );
            setWarehouse(response.data);
        } catch (error) {
            console.error("Error retrieving the warehouse.", error);
        }
    };

    useEffect(() => {
        getSelectedWarehouse(id);
    }, [id]);

    if (!warehouse) {
        return <>Loading data...</>;
    }

    return (
        <div>
            <DetailsPageHeader
                name={warehouse.warehouse_name}
                navLink={`/warehouses/edit/${id}`}
            />
            <WarehouseDetails warehouse={warehouse} />
            <WarehouseInventoryList warehouseId={id} />
        </div>
    );
};

export default WarehouseDetailsPage;
