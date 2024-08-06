import InventoryForm from "../../components/InventoryForm/InventoryForm.jsx";
import DetailsPageHeader from "../../components/DetailsPageHeader/DetailsPageHeader.jsx";

const InventoryFormPage = ({ mode }) => {
    return (
        <>
            <DetailsPageHeader name={`${mode} Inventory Item`} />
            <InventoryForm />
        </>
    );
};

export default InventoryFormPage;
