import './WarehouseList.scss';
import { Link } from 'react-router-dom';
import iconDelet from "../../assets/Icons/delete_outline-24px.svg";
import iconEdit from "../../assets/Icons/edit-24px.svg";
import iconChevron from "../../assets/Icons/chevron_right-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";


const URL = 'http://localhost:8080';

const WarehouseList = () => {

  const navigate = useNavigate();

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

    const handleEditClick = (id) => {
    navigate(`/warehouses/edit/${id}`);
  };


  if (warehouses.length === 0) {
    return <>Loading warehouses...</>;
  }

  return (
    <>
      <div className="warehouse__tablet-heading-main">
        <div className="warehouse__tablet-heading-left">
          <h4 className="warehouse__tablet-heading">WAREHOUSE<img src={sort} className='icon'/></h4>
          <h4 className="warehouse__tablet-heading">ADDRESS<img src={sort} className='icon'/></h4>
        </div>
        <div className="warehouse__tablet-heading-right">
          <h4 className="warehouse__tablet-heading">CONTACT NAME<img src={sort} className='icon'/></h4>
          <h4 className="warehouse__tablet-heading">CONTACT INFORMATION<img src={sort} className='icon'/></h4>
        </div>
        <h4 className="warehouse__tablet-heading-actions">ACTIONS</h4>
      </div>
    {warehouses.map((warehouse) => ( 

      <li className="warehouse__wrapper" key={warehouse.id}>
          <div className="warehouse__row--infos">

              <div className="warehouse__column--left"> 

                  <div className="warehouse__column">
                      <h4 className="warehouse__heading">WAREHOUSE</h4>

                      <Link 
                        className="warehouse__link"
                        to={`/warehouses/${warehouse.id}`} 
                        onClick={() => {
                            window.scroll({
                            top: 0,
                            behavior: 'smooth',
                        })}}
                        >
                        <h3 className="warehouse__name">{warehouse.warehouse_name}<img src={iconChevron} className='icon'/></h3>
                        </Link>

                  </div> 
                  <div className="warehouse__column">
                      <h4 className="warehouse__heading">ADDRESS</h4>
                      <p className="warehouse__text p2">
                        {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                      </p>
                  </div>
              </div>

              <div className="warehouse__column--right">

                  <div className="warehouse__column">
                      <h4 className="warehouse__heading">CONTACT NAME</h4>
                      <p className="warehouse__text  p2">{warehouse.contact_name}</p>
                  </div> 
                  <div className="warehouse__column">
                      <h4 className="warehouse__heading">CONTACT INFORMATION</h4>
                      <p className="warehouse__text  p2">{warehouse.contact_phone}</p>
                      <p className="warehouse__text  p2">{warehouse.contact_email}</p>
                  </div>
              </div>
          </div>
          
          <div className="warehouse__row--icons">
              <img className="icon" src={iconDelet} alt='icon delet' />
              <img className="icon" src={iconEdit} alt='icon edit'  onClick={() => handleEditClick(warehouse.id)}/>
          </div>
      </li>
      ))}
    </>
  )};
    
export default WarehouseList;
