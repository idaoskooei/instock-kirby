import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./DeleteInventory.scss";
import close from "../../assets/Icons/close-24px.svg";
import Modal from "react-modal";

// Make sure to set the app element for accessibility
Modal.setAppElement("#root");

// const URL = import.meta.env.VITE_APP_BASE_URL;
const URL = 'http://localhost:8080';  

const DeleteInventory = () => {
    const [inventory, setInventory] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get(`${URL}/api/inventories/${id}`);
                setInventory(response.data);
            } catch (error) {
                console.error('Error fetching inventory item:', error);
            }
        };

        fetchInventory();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`${URL}/api/inventories/${id}`);
            alert("🗑️ Inventory item deleted successfully!");
            navigate('-1');
        } catch (error) {
            console.error('Error deleting inventory item:', error);
            alert("❌ Failed to delete inventory item, try again.");
        }
    };

    const handleCancel = () => {
        setModalIsOpen(false);
        navigate('-1');
    };

    if (!inventory) {
        return <p>Loading...</p>;
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCancel}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <img className="icon" src={close} alt="Close" onClick={handleCancel} />
            <h1>Delete Inventory Item?</h1>
            <p className="p3">
                Please confirm that you'd like to delete {inventory.name} from the inventory list. You won't be able to undo this action.
            </p>
            <button className="__delete-btn" onClick={handleDelete}>Delete</button>
            <button className="__cancel-btn" onClick={handleCancel}>Cancel</button>
        </Modal>
    );
};

export default DeleteInventory;
