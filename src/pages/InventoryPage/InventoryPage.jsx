import React from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";
import Footer from "../../components/Footer/Footer";

const InventoryPage = () => {
    return (
        <div>
            <MainPageHeader
                title="Inventory"
                addButtonText="+ Add New Item"
                addButtonLink="/add-inventory"
            />
            <InventoryList />
            <Footer />
        </div>
    );
};

export default InventoryPage;
