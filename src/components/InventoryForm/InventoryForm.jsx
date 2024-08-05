import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./InventoryForm.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const categoryOptions = [
  "Health",
  "Gear",
  "Electronics",
  "Apparel",
  "Accessories",
];

const AddNewInventory = () => {
  const IN_STOCK = "In Stock";
  const OUT_OF_STOCK = "Out of Stock";
  const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [status, setStatus] = useState(IN_STOCK);
  const [quantity, setQuantity] = useState("");
  const [warehouseOptions, setWarehouseOptions] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  //handle input changes
  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (option) => {
    setSelectedCategory(option.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleWarehouseChange = (option) => {
    setSelectedWarehouse(option);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  //useEffect to load list of warehouse
  const getWarehouses = async () => {
    try {
      let response = await axios.get(`${API_BASE_URL}/api/warehouses`);
      const warehouses = response.data;
      const warehouseOptions = [];
      for (const warehouse of warehouses) {
        warehouseOptions.push({
          value: warehouse.id,
          label: warehouse.warehouse_name,
        });
      }

      setWarehouseOptions(warehouseOptions);
    } catch (error) {
      console.error("Error retreiving list of warehouses.", error);
    }
  };
  useEffect(() => {
    getWarehouses();
  }, []);

  //use effect if it in edit mode
  const getSelectedInventoryItem = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/inventories/${id}`);
      const {
        warehouse_id,
        warehouse_name,
        item_name,
        description,
        category,
        status,
        quantity,
      } = response.data;
      setItemName(item_name);
      setDescription(description);
      setSelectedCategory(category);
      setStatus(status);
      setQuantity(quantity);
      setSelectedWarehouse({
        value: warehouse_id,
        label: warehouse_name,
      });
    } catch (error) {
      console.error("Error retreiving selected Inventory Item", error);
    }
  };
  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      getSelectedInventoryItem();
    }
  }, [id]);

  //error checking
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [isQuantityValid, setIsQuantityValid] = useState(true);
  const [isWarehouseValid, setIsWarehouseValid] = useState(true);

  useEffect(() => {
    if (status === "Out of Stock") {
      setQuantity(0);
    }
  }, [status]);

  const isFormValid = () => {
    let isValid = true;

    if (!itemName) {
      setIsNameValid(false);
      isValid = false;
    } else {
      setIsNameValid(true);
    }

    if (!description) {
      setIsDescriptionValid(false);
      isValid = false;
    } else {
      setIsDescriptionValid(true);
    }

    if (!selectedCategory) {
      setIsCategoryValid(false);
      isValid = false;
    } else {
      setIsCategoryValid(true);
    }

    if (
      (status === IN_STOCK && !quantity) ||
      (status === IN_STOCK && quantity === 0)
    ) {
      setQuantity("");
      setIsQuantityValid(false);
      isValid = false;
    } else {
      setIsQuantityValid(true);
    }

    if (!selectedWarehouse) {
      setIsWarehouseValid(false);
      isValid = false;
    } else {
      setIsWarehouseValid(true);
    }
    return isValid;
  };

  const submitForm = async () => {
    try {
      const newItem = {
        warehouse_id: selectedWarehouse.value,
        item_name: itemName,
        description: description,
        category: selectedCategory,
        status: status,
        quantity: quantity,
      };
      console.log(newItem);
      await axios.post(`${API_BASE_URL}/api/inventories`, newItem);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const editForm = async () => {
    try {
      const updateItem = {
        warehouse_id: selectedWarehouse.value,
        item_name: itemName,
        description: description,
        category: selectedCategory,
        status: status,
        quantity: quantity,
      };
      await axios.put(`${API_BASE_URL}/api/inventories/${id}`, updateItem);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      if (isEditMode) {
        editForm();
      } else {
        submitForm();
      }
      navigate("/inventory");
    }
  };

  if (!warehouseOptions) {
    return <>Loading...</>;
  }
  return (
    <div>
      <form
        id="inventory-form"
        className="inventory-form"
        onSubmit={handleSubmit}
      >
        <div className="inventory-form__form-wrapper">
          <div className="inventory-form__section inventory-form__section--padding">
            <legend>
              <h2 className="inventory-form__header">Item Details</h2>
            </legend>
            <label className="p2 inventory-form__label" htmlFor="name">
              Item Name
            </label>
            <input
              type="text"
              className={
                isNameValid
                  ? "inventory-form__input"
                  : " inventory-form__input inventory-form__input--error"
              }
              id="name"
              name="name"
              placeholder="Item name"
              onChange={handleItemNameChange}
              value={itemName}
            />
            {!isNameValid && <ErrorMessage />}
            <label className="inventory-form__label" htmlFor="description">
              Description
            </label>
            <textarea
              className={
                isDescriptionValid
                  ? "inventory-form__input inventory-form__input--textarea"
                  : "inventory-form__input inventory-form__input--textarea inventory-form__input--error"
              }
              name="description"
              id="description"
              placeholder="Please enter a brief item description..."
              onChange={handleDescriptionChange}
              value={description}
            ></textarea>
            {!isDescriptionValid && <ErrorMessage />}
            <label
              className="inventory-form__label"
              id="category-label"
              htmlFor="category-dropdown"
            >
              Category
            </label>
            <Dropdown
              options={categoryOptions}
              onChange={handleCategoryChange}
              value={selectedCategory}
              placeholder="Please select"
              aria-labelledby="category-label"
              id="category-dropdown"
              className={
                isCategoryValid
                  ? "inventory-form__dropdown"
                  : "inventory-form__dropdown inventory-form__dropdown--error"
              }
            />
            {!isCategoryValid && <ErrorMessage />}
          </div>
          <div className="inventory-form__section inventory-form__section--divider">
            <legend>
              <h2 className="inventory-form__header">Item Availability</h2>
            </legend>

            <label className="inventory-form__label">Status</label>
            <div className="inventory-form__radio-wrapper">
              <label
                className={
                  status === IN_STOCK
                    ? "inventory-form__radio-btn-lbl"
                    : "inventory-form__radio-btn-lbl inventory-form__radio-btn-lbl--grey"
                }
              >
                <input
                  type="radio"
                  name="status"
                  value={IN_STOCK}
                  checked={status === IN_STOCK}
                  onChange={handleStatusChange}
                  className="inventory-form__radio-btn "
                />
                {IN_STOCK}
              </label>
              <label
                className={
                  status === OUT_OF_STOCK
                    ? "inventory-form__radio-btn-lbl"
                    : "inventory-form__radio-btn-lbl inventory-form__radio-btn-lbl--grey"
                }
              >
                <input
                  type="radio"
                  name="status"
                  value={OUT_OF_STOCK}
                  checked={status === OUT_OF_STOCK}
                  onChange={handleStatusChange}
                  className="inventory-form__radio-btn"
                />
                {OUT_OF_STOCK}
              </label>
            </div>

            {status === IN_STOCK && (
              <div>
                <label className="inventory-form__label" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  className={
                    isQuantityValid
                      ? "inventory-form__input"
                      : "inventory-form__input inventory-form__input--error"
                  }
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  onChange={handleQuantityChange}
                  value={quantity}
                />
                {!isQuantityValid && <ErrorMessage />}
              </div>
            )}
            <label
              className="inventory-form__label"
              id="warehouse-label"
              htmlFor="warehouse-dropdown"
            >
              Warehouse
            </label>
            <Dropdown
              options={warehouseOptions}
              onChange={handleWarehouseChange}
              value={selectedWarehouse ? selectedWarehouse : ""}
              placeholder="Please select"
              aria-labelledby="warehouse-label"
              id="warehouse-dropdown"
              className={
                isWarehouseValid
                  ? "inventory-form__dropdown"
                  : "inventory-form__dropdown inventory-form__dropdown--error"
              }
            />
            {!isWarehouseValid && <ErrorMessage />}
          </div>
        </div>
      </form>
      <div className="inventory-form__button--all">
        <button
          onClick={handleCancelClick}
          className="inventory-form__button inventory-form__button--cancel button"
        >
          Cancel
        </button>
        <button
          type="submit"
          form="inventory-form"
          className="inventory-form__button inventory-form__button--add button"
        >
          {isEditMode ? "Save" : "+ Add Item"}
        </button>
      </div>
    </div>
  );
};

export default AddNewInventory;
