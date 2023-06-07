import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import './AddAirbnb.scss';
import { Popup } from '../../components';
import { accommodationValues, hostInfo } from '../../constants';

function AddAirbnb() {
  const [formValues, setFormValues] = useState({ name: '', address: '', house_number: '', children_friendly: 0, pet_friendly: 0, has_tv: 0, has_bathtub: 0, has_self_checkin: 0, has_private_entrance: 0, has_security_devices: 0, has_laundry: 0, has_patio: 0, has_paid_parking: 0, has_fireplace: 0, is_long_term_stays_allowed: 0, has_city_skyline_view: 0, is_smoking_allowed: 0, has_free_parking: 0, has_heating_cooling_systems: 0, has_elevator: 0, has_cooking_basics: 0, has_internet: 0, has_breakfast: 0, host_greets_you: 0, accommodates: '', beds: '', bedrooms: '', n_bathrooms: '', is_bathroom_shared: 0, availability_365: '', property_type: '', room_type: '', latitude: '', longitude: '', instant_bookable: 0, city: '', price: '', minimum_nights: ''});
  const [popup, setPopup] = useState({trigger: false, title: '', description: ''});
  const [predictionValues, setPredictionValues] = useState({price_static: '', location_score: '', rating_score: '', price_dynamic: ''})
  const [loading, setLoading] = useState(false);
  const [detailPage, setDetailPage] = useState(false);

  const navigate = useNavigate();

  const inputs = {
    name: {
      id: 'i1',
      name: 'name',
      type: 'text',
      placeholder: 'Name of the Airbnb',
      label: 'name',
      required: true,
    },
    address: {
      id: 'i2_1',
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      label: 'address',
      required: true,
    },
    house_number: {
      id: 'i2_2',
      name: 'house_number',
      type: 'string',
      placeholder: 'House number',
      label: 'house_number',
      required: true,
    },
    accommodates: {
      id: 'i3',
      name: 'accommodates',
      type: 'number',
      placeholder: 'Number of accommodates',
      label: 'accommodates',
      required: true,
      min: 0
    },
    beds: {
      id: 'i4',
      name: 'beds',
      type: 'number',
      placeholder: 'Number of beds',
      label: 'beds',
      required: true,
      min: 0
    },
    bedrooms: {
      id: 'i5',
      name: 'bedrooms',
      type: 'number',
      placeholder: 'Number of bedrooms',
      label: 'bedrooms',
      required: true,
      min: 0
    },
    n_bathrooms: {
      id: 'i6',
      name: 'n_bathrooms',
      type: 'number',
      placeholder: 'Number of bathrooms',
      label: 'n_bathrooms',
      required: true,
      min: 0
    },
    availability_365: {
      id: 'i7',
      name: 'availability_365',
      type: 'text',
      placeholder: 'Number of days your Airbnb is available (in a year)',
      label: 'availability_365',
      required: true,
      min: 0,
      max: 365
    },
    latitude: {
      id: 'i8',
      name: 'latitude',
      type: 'number',
      step:'any',
      placeholder: 'Latitude',
      label: 'latitude',
      required: true,
    },
    longitude: {
      id: 'i9',
      name: 'longitude',
      step:'any',
      type: 'number',
      placeholder: 'Longitude',
      label: 'longitude',
      required: true,
    },
    price: {
      id: 'i10',
      name: 'price',
      step:'any',
      type: 'number',
      placeholder: 'Price',
      label: 'price',
      required: true,
      min: 0
    },
    minimum_nights: {
      id: 'i11',
      name: 'minimum_nights',
      type: 'number',
      placeholder: 'Minimum nights',
      label: 'minimum_nights',
      required: true,
      min: 1
    }
  }

  const amenities = [
    {
      name: 'children_friendly',
      label: 'Children friendly'
    },
    {
      name: 'pet_friendly',
      label: 'Pet friendly'
    },
    {
      name: 'has_tv',
      label: 'Has tv'
    },
    {
      name: 'has_bathtub',
      label: 'Has bathtub'
    },
    {
      name: 'has_self_checkin',
      label: 'Has self-checkin'
    },
    {
      name: 'has_private_entrance',
      label: 'Has private entrance'
    },
    {
      name: 'has_security_devices',
      label: 'Has security devices'
    },
    {
      name: 'has_laundry',
      label: 'Has laundry'
    },
    {
      name: 'has_patio',
      label: 'Has patio'
    },
    {
      name: 'has_paid_parking',
      label: 'Paid parking nearby'
    },
    {
      name: 'has_fireplace',
      label: 'Has fireplace'
    },
    {
      name: 'is_long_term_stays_allowed',
      label: 'Long term stays allowed'
    },
    {
      name: 'has_city_skyline_view',
      label: 'Has city skylines view'
    },
    {
      name: 'is_smoking_allowed',
      label: 'Smocking allowed'
    },
    {
      name: 'has_free_parking',
      label: 'Free parking nearby'
    },
    {
      name: 'has_heating_cooling_systems',
      label: 'Has heating-cooling systems'
    },
    {
      name: 'has_elevator',
      label: 'Has elevator'
    },
    {
      name: 'has_cooking_basics',
      label: 'Has cooking basics'
    },
    {
      name: 'has_internet',
      label: 'Has internet'
    },
    {
      name: 'has_breakfast',
      label: 'Has breakfast'
    },
    {
      name: 'host_greets_you',
      label: 'Host greets you'
    }
  ]

  const cities = [
    'Amsterdam',
    'Athens',
    'Barcelona',
    'Berlin',
    'Brussels',
    'Dublin',
    'Lisboa',
    'London',
    'Lyon',
    'Madrid',
    'Milan',
    'Munich',
    'Paris',
    'Rome',
    'Vienna'
  ]

  const room_type = [
    'Shared room',
    'Hotel room',
    'Entire home/apt',
    'Private room'
  ]

  useEffect(() => {
    if (formValues.address !== '' && formValues.city !== '' && formValues.house_number !== '' && (formValues.latitude === '' && formValues.longitude === '')) {
      setTimeout(() => {
        const address = formValues.address.replace(' ', '+')
        let URL = `https://geocode.maps.co/search?street=${formValues.house_number}+${address}&city=${formValues.city}`
        axios.get(URL)
				.then(function (response) {
					if (response.status === 200) {
            if (response.data.length > 0) {
              const lat = response.data[0].lat
              const lon = response.data[0].lon
              setFormValues({...formValues, latitude: lat, longitude: lon})
            }
					}
				})
      }, 1000)
    }
  }, [formValues])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    let formData = new FormData();
    formData.append('name', formValues['name']);
    formData.append('address', formValues['address']);
    formData.append('children_friendly', formValues['children_friendly']);
    formData.append('pet_friendly', formValues['pet_friendly']);
    formData.append('has_tv', formValues['has_tv']);
    formData.append('has_bathtub', formValues['has_bathtub']);
    formData.append('has_self_checkin', formValues['has_self_checkin']);
    formData.append('has_private_entrance', formValues['has_private_entrance']);
    formData.append('has_security_devices', formValues['has_security_devices']);
    formData.append('has_laundry', formValues['has_laundry']);
    formData.append('has_patio', formValues['has_patio']);
    formData.append('has_paid_parking', formValues['has_paid_parking']);
    formData.append('has_fireplace', formValues['has_fireplace']);
    formData.append('is_long_term_stays_allowed', formValues['is_long_term_stays_allowed']);
    formData.append('has_city_skyline_view', formValues['is_long_term_stays_allowed']);
    formData.append('is_smoking_allowed', formValues['is_smoking_allowed']);
    formData.append('has_free_parking', formValues['has_free_parking']);
    formData.append('has_heating_cooling_systems', formValues['has_heating_cooling_systems']);
    formData.append('has_elevator', formValues['has_elevator']);
    formData.append('has_cooking_basics', formValues['has_cooking_basics']);
    formData.append('has_internet', formValues['has_internet']);
    formData.append('has_breakfast', formValues['has_breakfast']);
    formData.append('host_greets_you', formValues['host_greets_you']);
    formData.append('accommodates', formValues['accommodates']);
    formData.append('beds', formValues['beds']);
    formData.append('bedrooms', formValues['bedrooms']);
    formData.append('n_bathrooms', formValues['n_bathrooms']);
    formData.append('is_bathroom_shared', formValues['is_bathroom_shared']);
    formData.append('availability_365', formValues['availability_365']);
    formData.append('property_type', formValues['property_type']);
    formData.append('room_type', formValues['room_type']);
    formData.append('latitude', formValues['latitude']);
    formData.append('longitude', formValues['longitude']);
    formData.append('instant_bookable', formValues['instant_bookable']);
    formData.append('city', formValues['city']);
    formData.append('is_work_email_verified', hostInfo.is_work_email_verified);
    formData.append('host_identity_verified', hostInfo.host_identity_verified);
    formData.append('host_is_superhost', hostInfo.host_is_superhost);
    formData.append('host_response_time', hostInfo.host_response_time);
    formData.append('host_acceptance_rate', hostInfo.host_acceptance_rate);
    formData.append('host_response_rate', hostInfo.host_response_rate);
    formData.append('is_phone_verified', hostInfo.is_phone_verified);
    formData.append('is_email_verified', hostInfo.is_email_verified);
    formData.append('review_scores_checkin', accommodationValues.review_scores_checkin);
    formData.append('review_scores_communication', accommodationValues.review_scores_communication);
    formData.append('number_of_reviews', accommodationValues.number_of_reviews);
    formData.append('review_scores_cleanliness', accommodationValues.review_scores_cleanliness);
    formData.append('review_scores_rating', accommodationValues.review_scores_rating);
    formData.append('review_scores_location', accommodationValues.review_scores_location);
    formData.append('minimum_nights', formValues.minimum_nights);
    
    axios.post("http://localhost:8000/api/generate-prediction", formData)
    .then(function (response) {
      if (response.status === 200) {
        const data = JSON.parse(response.data.data)
        setPredictionValues({price_static: data.price_static, location_score: data.location_score, rating_score: data.rating_score, price_dynamic: data.price_dynamic})
        setDetailPage(true)
      }
    })
    .catch(function (error) {
      setPopup({ trigger: true, title: "An error occurred!", description: '' })
    })
    
    setLoading(false)
  }

  const handleAddAirbnb = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    let formData = new FormData();
    formData.append('name', formValues['name']);
    formData.append('address', formValues['address']);
    formData.append('children_friendly', formValues['children_friendly']);
    formData.append('pet_friendly', formValues['pet_friendly']);
    formData.append('has_tv', formValues['has_tv']);
    formData.append('has_bathtub', formValues['has_bathtub']);
    formData.append('has_self_checkin', formValues['has_self_checkin']);
    formData.append('has_private_entrance', formValues['has_private_entrance']);
    formData.append('has_security_devices', formValues['has_security_devices']);
    formData.append('has_laundry', formValues['has_laundry']);
    formData.append('has_patio', formValues['has_patio']);
    formData.append('has_paid_parking', formValues['has_paid_parking']);
    formData.append('has_fireplace', formValues['has_fireplace']);
    formData.append('is_long_term_stays_allowed', formValues['is_long_term_stays_allowed']);
    formData.append('has_city_skyline_view', formValues['is_long_term_stays_allowed']);
    formData.append('is_smoking_allowed', formValues['is_smoking_allowed']);
    formData.append('has_free_parking', formValues['has_free_parking']);
    formData.append('has_heating_cooling_systems', formValues['has_heating_cooling_systems']);
    formData.append('has_elevator', formValues['has_elevator']);
    formData.append('has_cooking_basics', formValues['has_cooking_basics']);
    formData.append('has_internet', formValues['has_internet']);
    formData.append('has_breakfast', formValues['has_breakfast']);
    formData.append('host_greets_you', formValues['host_greets_you']);
    formData.append('accommodates', formValues['accommodates']);
    formData.append('beds', formValues['beds']);
    formData.append('bedrooms', formValues['bedrooms']);
    formData.append('n_bathrooms', formValues['n_bathrooms']);
    formData.append('is_bathroom_shared', formValues['is_bathroom_shared']);
    formData.append('availability_365', formValues['availability_365']);
    formData.append('property_type', formValues['property_type']);
    formData.append('room_type', formValues['room_type']);
    formData.append('latitude', formValues['latitude']);
    formData.append('longitude', formValues['longitude']);
    formData.append('instant_bookable', formValues['instant_bookable']);
    formData.append('city', formValues['city']);
    formData.append('is_work_email_verified', hostInfo.is_work_email_verified);
    formData.append('host_identity_verified', hostInfo.host_identity_verified);
    formData.append('host_is_superhost', hostInfo.host_is_superhost);
    formData.append('host_response_time', hostInfo.host_response_time);
    formData.append('is_phone_verified', hostInfo.is_phone_verified);
    formData.append('is_email_verified', hostInfo.is_email_verified);
    formData.append('review_scores_checkin', accommodationValues.review_scores_checkin);
    formData.append('review_scores_communication', accommodationValues.review_scores_communication);
    formData.append('number_of_reviews', accommodationValues.number_of_reviews);
    formData.append('review_scores_cleanliness', accommodationValues.review_scores_cleanliness);
    formData.append('price', formValues.price);
    formData.append('house_number', formValues.house_number);
    formData.append('minimum_nights', formValues.minimum_nights);
    
    axios.post("http://localhost:8000/api/add-airbnb", formData)
    .then(function (response) {
      if (response.status === 200) {
        setPopup({ trigger: true, title: "Airbnb added!", description: '' })
        navigate("/")
      }
    })
    .catch(function (error) {
      setPopup({ trigger: true, title: "An error occurred!", description: '' })
      setLoading(false)
    })
    
    setLoading(false)
  }

  const onChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  };

  const onChangeAmenity = (e) => {
    const { name } = e.target;
    formValues[name] ? setFormValues({...formValues, [name]: 0}) : setFormValues({...formValues, [name]: 1})
  };

  const closePopup = () => {
    setPopup({...popup, 'trigger': false});
  }

  const selectLocationScoreText = (value) => {
    if (value >= 4.5) return 'Your Airbnb is in an excellent location. '
    else if (value >= 4) return 'Your Airbnb is in a good location. '
    else if (value >= 3) return 'Your Airbnb is in an decent location. '
    else return 'It looks like your Airbnb is in a bad location. '
  }

  const selectRatingScoreText = (value) => {
    if (value >= 4.5) return 'Your Airbnb will probably get an excellent rating score. '
    else if (value >= 4) return 'Your Airbnb will probably get a good rating score. '
    else if (value >= 3) return 'Your Airbnb will probably get an average rating score. '
    else return 'Your Airbnb will probably get a bad rating score. Consider making some improvements. '
  }

  return (
    <div>
      <div className='app__new app__container'>
      <h1>Add a new <span className='app__homepage-title-primary-color'>AirBnb</span></h1>
      {detailPage ? (
        <form className='app__new-form' onSubmit={handleAddAirbnb}>
          <div className='app__new-form-inputs'>
            Based on the information that you gave, the advised price for your Airbnb is:
            <div className='app__new-form-prediction-values'>
              ${predictionValues.price_static} (static)
            </div>
            <div className='app__new-form-prediction-values'>
              ${predictionValues.price_dynamic} (dynamic)
            </div>
            {selectLocationScoreText(predictionValues.location_score) + 'You should a get a location score of:'}
            <div className='app__new-form-prediction-values'>
              {predictionValues.location_score}/5
            </div>
            {selectRatingScoreText(predictionValues.rating_score) + 'You should a get a rating score of:'}
            <div className='app__new-form-prediction-values'>
            {predictionValues.rating_score}/5
            </div>
            Choose a price per night:
            <input {...inputs.price} value={formValues[inputs.price.name]} onChange={onChange} />
          </div>
          <button type='submit'>
            {loading ? 'Request Sent..' : 'Confirm Add Airbnb'}
          </button>
          <button type='button' onClick={() => setDetailPage(false)}>
            Go Back
          </button>
        </form>
      ) : (
        <form className='app__new-form' onSubmit={handleSubmit}>
          <div className='app__new-form-inputs'>
            Give us some general information on your Airbnb!
            <input {...inputs.name} value={formValues[inputs.name.name]} onChange={onChange} />
            <input {...inputs.address} value={formValues[inputs.address.name]} onChange={onChange} />
            <input {...inputs.house_number} value={formValues[inputs.house_number.name]} onChange={onChange} />
            <select name="city" id="city" defaultValue="" onChange={onChange} required>
              <option value="" disabled hidden>City</option>
              {cities.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            <input {...inputs.latitude} value={formValues[inputs.latitude.name]} onChange={onChange} />
            <input {...inputs.longitude} value={formValues[inputs.longitude.name]} onChange={onChange} />
            <hr />
            What does it offer?
            <input {...inputs.accommodates} value={formValues[inputs.accommodates.name]} onChange={onChange} />
            <input {...inputs.bedrooms} value={formValues[inputs.bedrooms.name]} onChange={onChange} />
            <input {...inputs.n_bathrooms} value={formValues[inputs.n_bathrooms.name]} onChange={onChange} />
            <select name="is_bathroom_shared" defaultValue="" id="is_bathroom_shared" onChange={onChange} required>
              <option value="" disabled hidden>Are bathrooms shared?</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <select name="room_type" defaultValue="" id="room_type" onChange={onChange} required>
              <option value="" disabled hidden>Room type</option>
              {room_type.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            <hr /> 
            We need some information on the availability     
            <input {...inputs.availability_365} value={formValues[inputs.availability_365.name]} onChange={onChange} />
            <input {...inputs.minimum_nights} value={formValues[inputs.minimum_nights.name]} onChange={onChange} />
            <select name="instant_bookable" defaultValue="" id="instant_bookable" onChange={onChange} required>
              <option value="" disabled hidden>Is instant bookable?</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <hr />
            What are the amenities?
            <div className='app__new-form-inputs-amenities'>
              {amenities.map((item, index) => (
                  <button type='button' style={{color: formValues[item.name] ? 'var(--white-color)' : 'var(--primary-color)', backgroundColor: formValues[item.name] ? 'var(--primary-color)' : 'var(--white-color)' }} key={index} onClick={onChangeAmenity} name={item.name} value={formValues[item.name]}>{item.label}</button>
              ))}
            </div>
          </div>
          <button type='submit'>
            {loading ? 'Request Sent..' : 'Continue'}
          </button>
        </form>
      )}
      </div>

      <Popup trigger={popup['trigger']} title={popup['title']} description={popup['description']} onClick={closePopup} />
    </div>
  )
}

export default AddAirbnb