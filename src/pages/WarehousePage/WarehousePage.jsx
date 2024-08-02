import WarehouseList from "../../components/WarehouseList/WarehouseList";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";
import './WarehousePage.scss';

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