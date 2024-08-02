import "./InventoryDetails.scss";
import DetailsPageHeader from "../DetailsPageHeader/DetailsPageHeader";

const InventoryDetails = ({ inventory }) => {
    const {
        id,
        warehouse_name,
        warehouse_id,
        item_name,
        description,
        category,
        status,
        quantity,
    } = inventory;
    console.log(inventory);
    

    return (
        <div className="details"> 
              <div className="details__wrapper">
                    <div className="details__column">
                        <div>
                            <h4 className="details__label">ITEM DESCRIPTION:</h4>
                            <p className="p2">{description}</p>
                        </div>
                        <div>
                            <h4 className="details__label">CATEGORY:</h4>
                            <p className="p2">{category}</p>
                        </div>
                    </div>
                    <div className="details__column">
                        <div className="details__column">
                            <div className="details__column-left">
                                <h4 className="details__label">STATUS:</h4>
                                <p className="p2">{status}</p>
                            </div>
                            <div className="details__column">
                                <h4 className="details__label">WAREHOUSE:</h4>
                                <p className="p2">{quantity}</p>
                            </div>
                        </div>
                        <div  className="details__column-left">
                            <h4 className="details__label">QUANTITY:</h4>
                            <p className="p2">{warehouse_name}</p>
                        </div>
                    </div>
             </div>
        </div>
    );
};

export default InventoryDetails;
