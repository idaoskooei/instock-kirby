import "./WarehouseDetails.scss";
import WarehouseInventoryListItem from "../WarehouseInventoryListItem/WarehouseInventoryListItem";
import DetailsPageHeader from "../DetailsPageHeader/DetailsPageHeader";

const WarehouseDetails = ({ warehouse }) => {
    return (
        <div className="details">
            <div className="details__header-wrapper">
                <DetailsPageHeader name="name" hasEdit={true} />
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
