import WarehouseList from "../../components/WarehouseList/WarehouseList";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";

const WarehousePage = () => {
  return (
    <>
      <MainPageHeader
        title="Warehouses"
        addButtonText="+ Add New Warehouses"
        addButtonLink="/add-warehouse"
      />
      <WarehouseList />
    </>
  );
};

export default WarehousePage;
