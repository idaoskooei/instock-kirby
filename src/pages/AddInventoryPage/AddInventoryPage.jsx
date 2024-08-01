import AddNewInventory from "../../components/AddNewInventory/AddNewInventory";
import DetailsPageHeader from "../../components/DetailsPageHeader/DetailsPageHeader.jsx";

const AddInventoryPage = () => {
    return (
        <>
            <DetailsPageHeader name="Add New Inventory Item" />
            <AddNewInventory />
        </>
    );
};

export default AddInventoryPage;
