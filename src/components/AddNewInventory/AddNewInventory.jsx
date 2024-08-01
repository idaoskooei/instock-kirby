import { useEffect, useState } from "react";
import "./AddNewInventory.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const categoryOptions = [
    "Health",
    "Gear",
    "Electronics",
    "Apparel",
    "Accessories",
];

const AddNewInventory = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [status, setStatus] = useState("In Stock");
    const [quantity, setQuantity] = useState("0");
    const [warehouses, setWarehouses] = useState([]);
    const [warehouseOptions, setWarehouseOptions] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [isFormValid, setIsFormValid] = useState(true);
    const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

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
        setSelectedWarehouse(option.value);
    };

    //useEffect to load list of warehouse
    const getWarehouses = async () => {
        try {
            let response = await axios.get(`${API_BASE_URL}/api/warehouses`);
            setWarehouses(response.data);
        } catch (error) {
            console.error("Error retriving list of warehouses.", error);
        }
    };
    useEffect(() => {
        getWarehouses();
        const warehouseOptions = [];
        for (const warehouse of warehouses) {
            warehouseOptions.push({
                value: warehouse.id,
                label: warehouse.warehouse_name,
            });
        }
        setWarehouseOptions(warehouseOptions);
    }, []);

    return (
        <div>
            <form className="inventory-form">
                <fieldset>
                    <legend>
                        <h2>Item Details</h2>
                    </legend>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="inventory-form__input"
                        id="name"
                        name="name"
                        placeholder="Item name"
                        onChange={handleItemNameChange}
                        value={itemName}
                    />
                    <label htmlFor="description" />
                    <textarea
                        className={
                            isFormValid
                                ? "inventory-form__input"
                                : "inventory-form__input inventory-form__input--error"
                        }
                        name="description"
                        id="description"
                        placeholder="Please enter a brief item description..."
                        onChange={handleDescriptionChange}
                        value={description}
                    ></textarea>
                    <label id="category-label" htmlFor="category-dropdown">
                        Category
                    </label>
                    <Dropdown
                        options={categoryOptions}
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                        placeholder="Please select"
                        aria-labelledby="category-label"
                        id="category-dropdown"
                    />
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Item Availability</h2>
                    </legend>
                    <fieldset>
                        <legend>
                            <p>Status</p>
                        </legend>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="In Stock"
                                checked={status === "In Stock"}
                                onChange={handleStatusChange}
                            />
                            In Stock
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="Out of Stock"
                                checked={status === "Out of Stock"}
                                onChange={handleStatusChange}
                            />
                            Out of Stock
                        </label>
                    </fieldset>

                    {status === "In Stock" && (
                        <div>
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                className="inventory-form__input"
                                id="quantity"
                                name="quantity"
                                placeholder="0"
                                onChange={handleQuantityChange}
                                value={quantity}
                            />
                        </div>
                    )}
                    <label id="warehouse-label" htmlFor="warehouse-dropdown">
                        Warehouse
                    </label>
                    <Dropdown
                        options={warehouseOptions}
                        onChange={handleWarehouseChange}
                        value={selectedWarehouse}
                        placeholder="Please select"
                        aria-labelledby="warehouse-label"
                        id="category-dropdown"
                    />
                </fieldset>
            </form>
        </div>
    );
};

export default AddNewInventory;
