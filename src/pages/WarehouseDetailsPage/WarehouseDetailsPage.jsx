import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

const WarehouseDetailsPage = () => {
    //Set variables
    const [warehouse, setWarehouse] = useState(null);
    const { id } = useParams();

    //get the video and videos list from the API
    const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

    const getSelectedWarehouse = async (id) => {
        try {
            let response = await axios.get(
                `${API_BASE_URL}/api/warehouses/${id}`
            );
            setWarehouse(response.data);
        } catch (error) {
            console.error("Error retriving the warehouse.", error);
        }
    };

    useEffect(() => {
        getSelectedWarehouse(id);
        console.log(id);
    }, [id]);

    if (!warehouse) {
        return <>Loading data...</>;
    }

    return (
        <div>
            <WarehouseDetails warehouse={warehouse} />
        </div>
    );
};

export default WarehouseDetailsPage;
