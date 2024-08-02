import "./InventoryDetails.scss";
import DetailsPageHeader from "../DetailsPageHeader/DetailsPageHeader";

const WarehouseDetails = ({ warehouse }) => {
    const {
        address,
        city,
        contact_email,
        contact_name,
        contact_phone,
        contact_position,
        country,
        warehouse_name,
    } = warehouse;
    console.log(warehouse);

    return (
        <div className="details">
            <div>
                <DetailsPageHeader name={warehouse_name} hasEdit={true} />
            </div>
            <div className="details__contact-wrapper">
                <div className="details__address-wrapper">
                    <h4 className="details__label">WAREHOUSE ADDRESS</h4>
                    <p className="p2">{`${address}, ${city}, ${country}`}</p>
                </div>
                <div className="details__contact-info">
                    <div>
                        <h4 className="details__label">CONTACT NAME</h4>
                        <p className="p2">{contact_name}</p>
                        <p className="p2">{contact_position}</p>
                    </div>
                    <div>
                        <h4 className="details__label">CONTACT INFORMATION:</h4>
                        <p className="p2">{contact_phone}</p>
                        <p className="p2">{contact_email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarehouseDetails;
