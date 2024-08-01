import WarehouseList from "../../components/WarehouseList/WarehouseList";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";
import './WarehousePage.scss';

const WarehousePage = () => {
  return (
    <>
    <ul className="warehouses__list">
      <MainPageHeader
        title="Warehouses"
        addButtonText="+ Add New Warehouses"
        addButtonLink="/add-warehouse"
      />
      <WarehouseList />
      </ul>
    </>
  );
};

export default WarehousePage;