import "./WarehouseDetails.scss";

const WarehouseDetails = ({ warehouse }) => {
    const {
        address,
        city,
        contact_email,
        contact_name,
        contact_phone,
        contact_position,
        country,
    } = warehouse;
    console.log(warehouse);

    return (
        <div className="details">
            <div className="details__contact-wrapper">
                <div className="details__address-wrapper">
                    <h4 className="details__label">WAREHOUSE ADDRESS</h4>
                    <div className="details__address--mobile">
                        <p className="p2">{`${address}, ${city}, ${country}`}</p>
                    </div>
                    <div className="details__address--tablet">
                        <p className="p2">{address}</p>
                        <p className="p2">{`${city}, ${country}`}</p>
                    </div>
                </div>
                <div className="details__contact-info">
                    <div className="details__contact-info--left" >
                        <h4 className="details__label">CONTACT NAME</h4>
                        <p className="p2">{contact_name}</p>
                        <p className="p2">{contact_position}</p>
                    </div>
                    <div className="details__contact-info--right" >
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
