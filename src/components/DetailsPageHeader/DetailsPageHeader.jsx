import "./DetailsPageHeader.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-white-24px.svg";
import { useNavigate } from "react-router-dom";

const DetailsPageHeader = ({ name, navLink }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const handleEditClick = () => {
        navigate(navLink);
    };

    return (
        <div className="detail-header">
            <div className="detail-header__wrapper">
                <button
                    className="detail-header__back-btn"
                    onClick={handleBack}
                >
                    <img src={backArrow} alt="Go back" />
                </button>
                <h1>{name}</h1>
            </div>
            <div className={navLink ? "" : "detail-header__edit-wrapper--none"}>
                <button
                    className="detail-header__edit-btn"
                    onClick={handleEditClick}
                >
                    <img src={editIcon} alt="Edit content." />
                    <p className="detail-header__edit-btn-word">Edit</p>
                </button>
            </div>
        </div>
    );
};

export default DetailsPageHeader;
