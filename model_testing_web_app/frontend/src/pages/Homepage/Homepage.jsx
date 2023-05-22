import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { images } from '../../constants';
import { Popup } from '../../components'
import './Homepage.scss';

function Homepage() {
    const [airbnbList, setAirbnbList] = useState([]);
    const [popup, setPopup] = useState({trigger: false, title: '', description: ''});
    
    useEffect(() => {
        getAirbnbList()
    }, []);
  

    const getAirbnbList = () => {
      axios.get('')
      .then(function(response) {
        if (response.status === 200) {
          const allAirbnb = response.data.airbnb;
          setAirbnbList(allAirbnb);
        } else {
          setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': response.data.message});
        }})
        .catch(function(error) {
            setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': 'Si è verificato un errore con il server. Ti preghiamo di riprovare più tardi.'});
        })
    }

    const closePopup = () => {
        setPopup({...popup, 'trigger': false});
    }
  
    const getImgPath = (item) => {
        return images[item];
    }

    return (
      <div>
        <div className='app_homepage app__container'>
            <h1>Your <text className='app_homepage-title-primary-color'>AirBnb</text></h1>
            <div className='app__airbnb-list'>
                {airbnbList !== undefined && airbnbList.length > 0 ? (airbnbList.map((item, index) => (
                <div className='app__airbnb-card' key={index}>
                    
                </div>
                ))) : 'You have no AirBnb. Add one now!'}
            </div>
        </div>

        <Popup trigger={popup['trigger']} title={popup['title']} description={popup['description']} onClick={closePopup} />
      </div>
    )
}

export default Homepage