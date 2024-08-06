import "./AddWarehouseForm.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import ErrorMsg from "../ErrorMessage/ErrorMessage";

const AddWarehouseForm = () => {
    const navigate = useNavigate();

    const [updatedMessage, setUpdatedMessage] = useState("");
    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [nameValid, setNameValid] = useState(true);
    const [addressValid, setAddressValid] = useState(true);
    const [cityValid, setCityValid] = useState(true);
    const [countryValid, setCountryValid] = useState(true);
    const [contactNameValid, setContactNameValid] = useState(true);
    const [positionValid, setPositionValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setNameValid(!!warehouseName);
        setAddressValid(!!address);
        setCityValid(!!city);
        setCountryValid(!!country);
        setContactNameValid(!!contactName);
        setPositionValid(!!position);
        setPhoneValid(!!phone);
        setEmailValid(!!email);

        if (
            !warehouseName ||
            !address ||
            !city ||
            !country ||
            !contactName ||
            !position ||
            !phone ||
            !email
        ) {
            return false;
        } else {
            try {
                const newWarehouse = {
                    warehouse_name: warehouseName,
                    address: address,
                    city: city,
                    contact_name: contactName,
                    contact_position: position,
                    contact_phone: phone,
                    contact_email: email,
                    country: country,
                };
                await axios.post(
                    "http://localhost:8080/api/warehouses",
                    newWarehouse
                );
                console.log(newWarehouse);
                navigate("/");
            } catch (error) {
                console.log(error);
                setUpdatedMessage("Failed to add warehouse. Please try again.");
                alert("Failed to add warehouse. Please try again.");
            }
        }
    };

    const handleCancelClick = (event) => {
        event.preventDefault();
        navigate(-1);
    };

    return (
        <form className="section" onSubmit={handleSubmit}>
            <div className="header-container">
                <NavLink className="link" to={`/`}>
                    <div className="title-container">
                        <img
                            className="title-container__arrow"
                            src={arrowBack}
                            alt="Arrow back"
                        />
                        <h1 className="title-container__title">
                            Add New Warehouse
                        </h1>
                    </div>
                </NavLink>
            </div>
            <div className="warehouse-contact-details">
                <div className="details-container">
                    <h2 className="details-container__header">
                        Warehouse Details
                    </h2>
                    <h3 className="details-container__subheader">
                        Warehouse Name
                    </h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="warehouseName"
                        value={warehouseName}
                        onChange={(e) => setWarehouseName(e.target.value)}
                        placeholder="Warehouse Name"
                    />
                    {!nameValid && <ErrorMsg />}
                    <h3 className="details-container__subheader">
                        Street Address
                    </h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street Address"
                    />
                    {!addressValid && <ErrorMsg />}
                    <h3 className="details-container__subheader">City</h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                    />
                    {!cityValid && <ErrorMsg />}
                    <h3 className="details-container__subheader">Country</h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                    />
                    {!countryValid && <ErrorMsg />}
                </div>
                <div className="details-container--borderless">
                    <h2 className="details-container__header">
                        Contact Details
                    </h2>
                    <h3 className="details-container__subheader">
                        Contact Name
                    </h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="contactName"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Contact Name"
                    />
                    {!contactNameValid && <ErrorMsg />}
                    <h3 className="details-container__subheader">Position</h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Position"
                    />
                    {!positionValid && <ErrorMsg />}
                    <h3 className="details-container__subheader">
                        Phone Number
                    </h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                    />
                    {!phoneValid && <ErrorMsg />}
                    <h3 className="details-container__subheader">Email</h3>
                    <input
                        className="details-container__input"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    {!emailValid && <ErrorMsg />}
                </div>
            </div>
            <div className="buttons-container">
                <p className="inventory-edit-form__message">{updatedMessage}</p>
                <div className="buttons-container__row">
                    <button
                        onClick={handleCancelClick}
                        className="buttons-container__cancel button"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="buttons-container__add button"
                    >
                        + Add Warehouse
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddWarehouseForm;