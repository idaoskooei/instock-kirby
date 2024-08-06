import InventoryForm from "../../components/InventoryForm/InventoryForm.jsx";
import DetailsPageHeader from "../../components/DetailsPageHeader/DetailsPageHeader.jsx";

const InventoryFormPage = () => {
    return (
        <>
            <DetailsPageHeader name="Edit Inventory Item" />
            <InventoryForm />
        </>
    );
};

export default InventoryFormPage;
