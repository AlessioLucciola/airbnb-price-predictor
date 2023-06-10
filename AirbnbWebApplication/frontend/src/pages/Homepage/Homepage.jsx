import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { images } from '../../constants';
import { Popup } from '../../components';
import { FaHouseUser, FaBath, FaMoneyBill, FaCity, FaBinoculars } from 'react-icons/fa';
import { BiTrain } from 'react-icons/bi';
import './Homepage.scss';
import { solveCityIndexer } from '../../utils/solveCityIndexer';

function Homepage() {
    const [airbnbList, setAirbnbList] = useState([]);
    const [popup, setPopup] = useState({trigger: false, title: '', description: ''});
    
    useEffect(() => {
        getAirbnbList()
    }, []);

    const getAirbnbList = () => {
      axios.get('http://localhost:8000/api/get-airbnb')
      .then(function(response) {
        if (response.status === 200) {
          const data = JSON.parse(response.data.data);
          console.log(data)
          setAirbnbList(data);
        }})
        .catch(function(error) {
            setPopup({'trigger': true, 'title': 'Error!', 'description': 'An error occurred while getting the list of Airbnb!'});
        })
    }

    const closePopup = () => {
        setPopup({...popup, 'trigger': false});
    }

    return (
      <div>
        <div className='app_homepage app__container'>
            <h1>Your <span className='app__homepage-title-primary-color'>AirBnb</span></h1>
            <div className='app__airbnb-list'>
                {airbnbList.length > 0 ? (airbnbList.map((item, index) => (
                  <div className='app__airbnb-card' key={index}>
                      <div className='app__airbnb-left'>
                        <img src={images[`img${index+1%5}`]} alt={`img${index}`}></img>
                      </div>
                      <div className='app__airbnb-right'>
                        <span className='app__airbnb-card-title'>{item.id + '. ' + item.name}</span>
                        {item.address + ' ' + item.house_number + ', ' + solveCityIndexer(item.city)}
                        <span>
                          <FaHouseUser /> {item.accommodates}
                        </span>
                        <span>
                          <FaBath /> {item.n_bathrooms}
                        </span>
                        <span>
                          <FaMoneyBill /> {item.price}$/night
                        </span>
                        <span>
                          <FaBinoculars /> {item.poi_dist.toFixed(2)} km
                        </span>
                        <span>
                          <FaCity /> {item.city_center_dist.toFixed(2)} km
                        </span>
                        <span>
                          <BiTrain /> {item.station_dist.toFixed(2)} km
                        </span>
                      </div>
                  </div>
                ))) : 'You have no AirBnb. Add one now!'}
            </div>
        </div>

        <Popup trigger={popup['trigger']} title={popup['title']} description={popup['description']} onClick={closePopup} />
      </div>
    )
}

export default Homepage