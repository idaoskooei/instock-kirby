import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DeleteInventory.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";
import Modal from "react-modal";
// Modal.setAppElement("#root");

const URL = import.meta.env.VITE_APP_BASE_URL;

const DeleteInventory = ({
    isOpen, 
    closeModal, 
    selectedInventory, 
    setSelectedInventory, 
    setInventoryToDisplay
}) => {

    const navigate = useNavigate();
    console.log(`Fetching inventory with id: ${selectedInventory.id}`);

    const handleDelete = async () => {
        try {
            await axios.delete(`${URL}/api/inventories/${selectedInventory.id}`);
            console.log(selectedInventory.id)
            window.location.reload()
        } catch (error) {
            console.error('Error deleting inventory item:', error);
            alert("Failed to delete inventory item, try again.");
        }
        closeModal();
    };

    const handleCancel = () => {
        closeModal(false);
    };


    if (!selectedInventory) {
        return <p>Loading...</p>;
    }
    return (
        <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Modal"
      className="delete-inventory"
      overlayClassName="delete-inventory__overlay"
    >
      <div className="delete-inventory__top-container">
        <img
          src={closeIcon}
          alt="Delete Icon"
          className="delete-inventory__close"
          onClick={closeModal}
        />
        <h1 className="delete-inventory__heading">{`Delete ${selectedInventory.item_name} inventory item?`}</h1>
        <p className="delete-inventory__confirm-text">{`Please confirm that you'd like to delete ${selectedInventory.item_name} from the inventory list. You won't be able to undo this action.`}</p>
      </div>
      <div className="delete-inventory__cancel-delete">
        <div
          className="delete-inventory__button delete-inventory__button--cancel button"
          onClick={closeModal}
          onBlur={closeModal}
        >
          Cancel
        </div>
        <div
          className="delete-inventory__button delete-inventory__button--delete button"
          onClick={handleDelete}
          onBlur={closeModal}
        >
          Delete
        </div>
      </div>
    </Modal>
    );
};

export default DeleteInventory;