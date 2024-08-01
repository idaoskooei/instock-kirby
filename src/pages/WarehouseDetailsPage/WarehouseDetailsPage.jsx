import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

const WarehouseDetailsPage = () => {
  // Set variables
  const [warehouse, setWarehouse] = useState(null);
  const { id } = useParams();

  // Get the warehouse details from the API
  const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const getSelectedWarehouse = async (id) => {
    try {
      let response = await axios.get(`${API_BASE_URL}/api/warehouses/${id}`);
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
      <WarehouseDetails warehouse={warehouse} />
      <InventoryList warehouseId={id} showWarehouseName={false} />
    </div>
  );
};

export default WarehouseDetailsPage;
