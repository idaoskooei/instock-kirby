import "./WarehouseDetails.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import WarehouseInventoryListItem from "../WarehouseInventoryListItem/WarehouseInventoryListItem";

const WarehouseDetails = () => {
    return (
        <div className="details">
            <div className="details__header-wrapper">
                <div className="details__header">
                    <button className="details__back-btn">
                        <img src={backArrow} alt="Go back to warehouse list." />
                    </button>
                    <h1>CITY</h1>
                </div>
                <button className="details__edit-btn">
                    <img src={editIcon} alt="Edit the warehouse details." />
                </button>
            </div>
            <div className="details__contact-wrapper">
                <div>
                    <p>WAREHOUSE ADDRESS</p>
                    <p>address</p>
                </div>
                <div className="details__contact-info">
                    <div>
                        <p>CONTACT NAME</p>
                        <p>name</p>
                        <p>position</p>
                    </div>
                    <div>
                        <p>CONTACT INFORMATION:</p>
                        <p>number</p>
                        <p>email</p>
                    </div>
                </div>
            </div>
            <div>
                <WarehouseInventoryListItem />
            </div>
        </div>
    );
};

export default WarehouseDetails;
