import "./InventoryList.scss";
import { Link } from "react-router-dom";
import iconDelete from "../../assets/Icons/delete_outline-24px.svg";
import iconEdit from "../../assets/Icons/edit-24px.svg";
import iconChevron from "../../assets/Icons/chevron_right-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteInventory from '../../components/DeleteInventory/DeleteInventory';

// const URL = import.meta.env.VITE_APP_BASE_URL;
const URL = "http://localhost:8080";

const InventoryList = ({ warehouseId }) => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${URL}/api/inventories`);
        const items = response.data;
        if (warehouseId) {
          setInventoryItems(
            items.filter((item) => item.warehouse_id === warehouseId)
          );
        } else {
          setInventoryItems(items);
        }
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchInventory();
  }, [warehouseId]);

  const openDeleteModal = (inventory) => {
    setSelectedInventory(inventory);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setSelectedInventory(null);
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="inventory__tablet-heading-main">
        <div className="inventory__tablet-heading-left">
          <h4 className="inventory__tablet-heading">
            ITEM NAME
            <img src={sort} className="icon" />
          </h4>
          <h4 className="inventory__tablet-heading">
            CATEGORY
            <img src={sort} className="icon" />
          </h4>
        </div>
        <div className="inventory__tablet-heading-right">
          <h4 className="inventory__tablet-heading">
            STATUS
            <img src={sort} className="icon" />
          </h4>
          <h4 className="inventory__tablet-heading">
            QUANTITY
            <img src={sort} className="icon" />
          </h4>

          <h4 className="inventory__tablet-heading">
            WAREHOUSE
            <img src={sort} className="icon" />
          </h4>
        </div>
        <h4 className="inventory__tablet-heading-actions">ACTIONS</h4>
      </div>
      {inventoryItems.map((item) => (
        <li className="inventory__wrapper" key={item.id}>
          <div className="inventory__row--infos">
            <div className="inventory__column--left">
              <div className="inventory__column">
                <h4 className="inventory__heading">ITEM NAME</h4>

                <Link
                  className="inventory__link"
                  to={`/inventory/${item.id}`}
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <h3 className="inventory__name">
                    {item.item_name}
                    <img src={iconChevron} className="icon" />
                  </h3>
                </Link>
              </div>
              <div className="inventory__column">
                <h4 className="inventory__heading">CATEGORY</h4>
                <p className="inventory__text">{item.category}</p>
              </div>
            </div>

            <div className="inventory__column--right">
              <div className="inventory__column">
                <h4 className="inventory__heading">STATUS</h4>
                <p className="inventory__text">{item.status}</p>
              </div>
              <div className="inventory__column">
                <h4 className="inventory__heading">QUANTITY</h4>
                <p className="inventory__text">{item.quantity}</p>
              </div>

              <div className="inventory__column">
                <h4 className="inventory__heading">WAREHOUSE</h4>
                <p className="inventory__text">{item.warehouse_name}</p>
              </div>
            </div>
          </div>

          <div className="inventory__row--icons">
          <button id="deleteButton" className="icon" onClick={() => openDeleteModal(inventory)}>
              <img className="icon" src={iconDelete} alt='icon delete' />
            </button>
            <Link to={`/inventory/${item.id}/edit`}>
              <img className="icon" src={iconEdit} alt="Edit" />
            </Link>
          </div>
        </li>
      ))}
      {isModalOpen && (
        <DeleteInventory 
          inventory={selectedInventory}
          onClose={closeDeleteModal}
        />
      )}
    </>
  );
};

export default InventoryList;
