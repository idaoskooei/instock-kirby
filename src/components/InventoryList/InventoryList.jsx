import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InventoryList = ({ warehouseId, showWarehouseName }) => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/inventory`);
        const items = response.data;
        if (warehouseId) {
          setInventoryItems(
            items.filter((item) => item.warehouseId === warehouseId)
          );
        } else {
          setInventoryItems(items);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInventory();
  }, [warehouseId, API_BASE_URL]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {inventoryItems.map((item) => (
        <li key={item.id}>
          <h2>
            <Link to={`/inventory/${item.id}`}>{item.name}</Link>
          </h2>
          <p>Category: {item.category}</p>
          <p>Status: {item.status}</p>
          <p>Quantity: {item.quantity}</p>
          {showWarehouseName && <p>Warehouse: {item.warehouse}</p>}
        </li>
      ))}
    </ul>
  );
};

export default InventoryList;
