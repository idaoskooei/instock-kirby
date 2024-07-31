import "./WarehouseInventoryListItem.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const WarehouseInventoryListItem = () => {
    return (
        <div className="list-item">
            <div className="list-item__details">
                <div>
                    <p>INVENTORY ITEM</p>
                    <p>item</p>
                </div>
                <div>
                    <p>CATEGORY</p>
                    <p>cat</p>
                </div>
                <div>
                    <p>STATUS</p>
                    <p>status</p>
                </div>
                <div>
                    <p>QTY</p>
                    <p>500</p>
                </div>
            </div>
            <div className="list-item__button-wrapper">
                <button>
                    <img
                        src={deleteIcon}
                        alt="Delete an inventory item from the warehouse."
                    />
                </button>
                <button>
                    <img src={editIcon} alt="Edit an inventory item. " />
                </button>
            </div>
        </div>
    );
};

export default WarehouseInventoryListItem;
