import "./DeleteInventory.scss";
import backArrow from "../../assets/Icons/close-24px.svg";
import axios from "axios";

// const URL = import.meta.env.VITE_APP_BASE_URL;
const URL = 'http://localhost:8080';  

const DeleteInventory = () => {

    const [inventory, setInventory] = useState({});

        // const  = async (id) => {
        //     try {
        //         await axios.delete(`${URL}/api/inventories/${id}`);
        //         // console.log('deleted successfully')
     
        //         setWarehouses(warehouses.filter(warehouse => warehouse.id !== id));
        //     } catch (error) {
        //         console.error('Error deleting inventory item:', error);
        //     }
        // };
    
        return (
            <div>
                <img src={editIcon} alt="Edit content." />
                
                <h1>Delete Television inventory item?</h1>
                <button onClick={handleDelete}>Delete</button>
            </div>
        );me={hasEdit ? "" : "detail-header__edit-wrapper--none"}>
                <button
                    className="detail-header__edit-btn"
                    onClick={() => handleEdit()}
                >
                    
                    <p className="p3 detail-header__edit-btn-word">Please confirm that you’d like to delete Television from the inventory list. You won’t be able to undo this action.</p>
        </div>
    );
};

export default DeleteInventory;