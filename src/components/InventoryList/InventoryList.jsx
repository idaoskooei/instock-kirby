import "./InventoryList.scss";
import { Link } from "react-router-dom";
import iconDelete from "../../assets/Icons/delete_outline-24px.svg";
import iconEdit from "../../assets/Icons/edit-24px.svg";
import iconChevron from "../../assets/Icons/chevron_right-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";

const InventoryList = ({ inventoryItems }) => {
    return (
        <>
            <div className="inventory__tablet-heading-main">
                <div className="inventory__tablet-heading-left">
                    <h4 className="inventory__tablet-heading">
                        ITEM NAME
                        <img src={sort} className="icon" />
                    </h4>
                    <h4 className="inventory__tablet-heading">
                        CATEGORY
                        <img src={sort} className="icon" />
                    </h4>
                </div>
                <div className="inventory__tablet-heading-right">
                    <h4 className="inventory__tablet-heading">
                        STATUS
                        <img src={sort} className="icon" />
                    </h4>
                    <h4 className="inventory__tablet-heading">
                        QUANTITY
                        <img src={sort} className="icon" />
                    </h4>

                    <h4 className="inventory__tablet-heading">
                        WAREHOUSE
                        <img src={sort} className="icon" />
                    </h4>
                </div>
                <h4 className="inventory__tablet-heading-actions">ACTIONS</h4>
            </div>
            {inventoryItems.map((item) => (
                <li className="inventory__wrapper" key={item.id}>
                    <div className="inventory__row--infos">
                        <div className="inventory__column--left">
                            <div className="inventory__column">
                                <h4 className="inventory__heading">
                                    ITEM NAME
                                </h4>

                                <Link
                                    className="inventory__link"
                                    to={`/inventory/${item.id}`}
                                    onClick={() => {
                                        window.scroll({
                                            top: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    <h3 className="inventory__name">
                                        {item.item_name}
                                        <img
                                            src={iconChevron}
                                            className="icon"
                                        />
                                    </h3>
                                </Link>
                            </div>
                            <div className="inventory__column">
                                <h4 className="inventory__heading">CATEGORY</h4>
                                <p className="inventory__text">
                                    {item.category}
                                </p>
                            </div>
                        </div>

                        <div className="inventory__column--right">
                            <div className="inventory__column">
                                <h4 className="inventory__heading">STATUS</h4>
                                <p className="inventory__text">{item.status}</p>
                            </div>
                            <div className="inventory__column">
                                <h4 className="inventory__heading">QUANTITY</h4>
                                <p className="inventory__text">
                                    {item.quantity}
                                </p>
                            </div>

                            <div className="inventory__column">
                                <h4 className="inventory__heading">
                                    WAREHOUSE
                                </h4>
                                <p className="inventory__text">
                                    {item.warehouse_name}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="inventory__row--icons">
                        <img className="icon" src={iconDelete} alt="Delete" />
                        <Link to={`/inventory/${item.id}/edit`}>
                            <img className="icon" src={iconEdit} alt="Edit" />
                        </Link>
                    </div>
                </li>
            ))}
        </>
    );
};

export default InventoryList;
