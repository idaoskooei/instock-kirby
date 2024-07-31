import './WarehouseList.scss';
import { Link } from 'react-router-dom';
import iconDelet from "../../assets/Icons/delete_outline-24px.svg";
import iconEdit from "../../assets/Icons/edit-24px.svg";
import iconChevron from "../../assets/Icons/chevron_right-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";

// const URL = import.meta.env.VITE_APP_BASE_URL;
const URL = 'http://localhost:8080';

const WarehouseList = () => {
  
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const findWarehousesAll = async () => {
      try {
        const response = await axios.get(`${URL}/api/warehouses`);
        setWarehouses(response.data);
      } catch (e) {
        console.error("Error fetching warehouses:", e);
      }
    };
    findWarehousesAll();
    console.log(warehouses);
    
  }, []); 

  if (warehouses.length === 0) {
    return <>Loading warehouses...</>;
  }

    return (

      <ul className="warehouses__list">

        {warehouses.map((warehouse) => (

          <Link 
          to={`/warehouses/${warehouse.id}`} 
          key={warehouse.id}
          onClick={() => {
              window.scroll({
              top: 0,
              behavior: 'smooth',
              })
          }
          }
          >
          <li className="warehouse">
              <div className="warehouse__row">
                  <div className="warehouse__column">
                      <div className="warehouse__column">
                          <h4 className="warehouse__heading">WAREHOUSE</h4>
                          <div className="warehouse__column">
                           <h3 className="warehouse__name">{warehouse.warehouse_name}<img src={iconChevron} className='icon_chevron'/></h3>
                          </div>
                      </div> 
                      <div className="warehouse__column">
                          <h4 className="warehouse__heading">ADDRESS</h4>
                          <p className="warehouse__text">
                            {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                         </p>
                      </div>
                  </div>
                  <div className="warehouse__column">
                      <div className="warehouse__column">
                          <h4 className="warehouse__heading">CONTACT NAME</h4>
                          <p className="warehouse__text">{warehouse.contact_name}</p>
                      </div> 
                      <div className="warehouse__column">
                          <h4 className="warehouse__heading">CONTACT INFORMATION</h4>
                          <p className="warehouse__text">{warehouse.contact_phone}</p>
                          <p className="warehouse__text">{warehouse.contact_email}</p>
                      </div>
                  </div>
              </div>
              
              <div className="warehouse__row">
                  <img className="warehouse__icon" src={iconDelet} alt='icon delet' />
                  <img className="warehouse__icon" src={iconEdit} alt='icon edit' />
              </div>
          </li>
        </Link>
        ))}
        </ul>
    )};
    
export default WarehouseList;
  