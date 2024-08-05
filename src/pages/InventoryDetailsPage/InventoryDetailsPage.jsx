import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import DetailsPageHeader from "../../components/DetailsPageHeader/DetailsPageHeader";

// const URL = import.meta.env.VITE_APP_BASE_URL;
const URL = 'http://localhost:8080';

const InventoryDetailsPage = () => {
    const [inventory, setInventory] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get(`${URL}/api/inventories/${id}`);
                setInventory(response.data);
            } catch (error) {
                console.error('Error fetching inventory data:', error);
            }
        };

        fetchInventory();
    }, [id]);

    // const handleEdit = () => {
        // navigate(`/inventory/${id}/edit`);
    // };

    if (!inventory) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <DetailsPageHeader
                name={inventory.item_name} 
                navLink={`/inventory/${id}/edit`}
                // handleEdit={handleEdit}
            />
            <InventoryDetails inventory={inventory} />
        </div>
    );
};

export default InventoryDetailsPage;
