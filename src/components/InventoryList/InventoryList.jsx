import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InventoryList = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:8080/inventory");
        setInventoryItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {inventoryItems.map((item) => (
        <li key={item.id}>
          <h2>
            INVENTORY ITEM
            <Link to={`/inventory/${item.id}`}>{item.name}</Link>
          </h2>
          <p>STATUS {item.status}</p>
          <p>CATEGORY {item.category}</p>
          <p>QUANTITY {item.quantity}</p>
          <p>WAREHOUSE {item.warehouse}</p>
        </li>
      ))}
    </ul>
  );
};

export default InventoryList;
