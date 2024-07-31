import "./WarehouseDetails.scss";
import DetailsPageHeader from "../DetailsPageHeader/DetailsPageHeader";

const WarehouseDetails = ({ warehouse }) => {
    return (
        <div className="details">
            <div>
                <DetailsPageHeader name="name" hasEdit={true} />
            </div>
            <div className="details__contact-wrapper">
                <div className="details__address-wrapper">
                    <h4 className="details__label">WAREHOUSE ADDRESS</h4>
                    <p className="p1">address</p>
                </div>
                <div className="details__contact-info">
                    <div>
                        <h4 className="details__label">CONTACT NAME</h4>
                        <p className="p1">name</p>
                        <p className="p1">position</p>
                    </div>
                    <div>
                        <h4 className="details__label">CONTACT INFORMATION:</h4>
                        <p className="p1">number</p>
                        <p className="p1">email</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarehouseDetails;
