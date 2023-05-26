import React, { useState } from 'react';
import axios from 'axios';

import { Popup } from '../../components';
import './AddAirbnb.scss';
import { m } from 'framer-motion';
import { accommodationValues, hostInfo } from '../../constants';

function AddAirbnb() {
  const [formValues, setFormValues] = useState({ name: '', address: '', children_friendly: false, pet_friendly: false, has_tv: false, has_bathtub: false, has_self_checkin: false, has_private_entrance: false, has_security_devices: false, has_laundry: false, has_patio: false, has_paid_parking: false, has_fireplace: false, is_long_term_stays_allowed: false, has_city_skyline_view: false, is_smoking_allowed: false, has_free_parking: false, has_heating_cooling_systems: false, has_elevator: false, has_cooking_basics: false, has_internet: false, has_breakfast: false, host_greets_you: false, accommodates: '', beds: '', bedrooms: '', n_bathrooms: '', is_bathroom_shared: false, availability_365: '', property_type: '', room_type: '', latitude: 0, longitude: 0, instant_bookable: false, city: ''});
  const [popup, setPopup] = useState({trigger: false, title: '', description: ''});
  const [loading, setLoading] = useState(true);

  const inputs = {
    name: {
      id: 'i1',
      name: 'name',
      type: 'text',
      placeholder: 'Name of the Airbnb',
      label: 'name',
      required: true,
      focused: false,
    },
    address: {
      id: 'i2',
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      label: 'address',
      required: true,
      focused: false,
    },
    accommodates: {
      id: 'i3',
      name: 'accommodates',
      type: 'number',
      placeholder: 'Number of accommodates',
      label: 'accommodates',
      required: true,
      focused: false,
      min: 0
    },
    beds: {
      id: 'i4',
      name: 'beds',
      type: 'number',
      placeholder: 'Number of beds',
      label: 'beds',
      required: true,
      focused: false,
      min: 0
    },
    bedrooms: {
      id: 'i5',
      name: 'bedrooms',
      type: 'number',
      placeholder: 'Number of bedrooms',
      label: 'bedrooms',
      required: true,
      focused: false,
      min: 0
    },
    n_bathrooms: {
      id: 'i6',
      name: 'n_bathrooms',
      type: 'number',
      placeholder: 'Number of bathrooms',
      label: 'n_bathrooms',
      required: true,
      focused: false,
      min: 0
    },
    availability_365: {
      id: 'i7',
      name: 'availability_365',
      type: 'text',
      placeholder: 'Number of days your Airbnb is available (in a year)',
      label: 'availability_365',
      required: true,
      focused: false,
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
      focused: false,
    },
    longitude: {
      id: 'i9',
      name: 'longitude',
      step:'any',
      type: 'number',
      placeholder: 'Longitude',
      label: 'longitude',
      required: true,
      focused: false,
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

  const property_type = [
    'Entire place',
    'Private room',
    'Shared room',
    'Other'
  ]

  const room_type = [
    'Shared room',
    'Hotel room',
    'Entire home/apt',
    'Private room'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    let formData = {
      name: formValues['name'],
      address: formValues['address'],
      children_friendly: formValues['address'],
      pet_friendly: formValues['pet_friendly'],
      has_tv: formValues['has_tv'],
      has_bathtub: formValues['has_bathtub'],
      has_self_checkin: formValues['has_self_checkin'],
      has_private_entrance: formValues['has_private_entrance'],
      has_security_devices: formValues['has_security_devices'],
      has_laundry: formValues['has_laundry'],
      has_patio: formValues['has_patio'],
      has_paid_parking: formValues['has_paid_parking'],
      has_fireplace: formValues['has_fireplace'],
      is_long_term_stays_allowed: formValues['is_long_term_stays_allowed'],
      has_city_skyline_view: formValues['is_long_term_stays_allowed'],
      is_smoking_allowed: formValues['is_smoking_allowed'],
      has_free_parking: formValues['has_free_parking'],
      has_heating_cooling_systems: formValues['has_heating_cooling_systems'],
      has_elevator: formValues['has_elevator'],
      has_cooking_basics: formValues['has_cooking_basics'],
      has_internet: formValues['has_internet'],
      has_breakfast: formValues['has_breakfast'],
      host_greets_you: formValues['host_greets_you'],
      accommodates: formValues['accommodates'],
      beds: formValues['beds'],
      bedrooms: formValues['bedrooms'],
      n_bathrooms: formValues['n_bathrooms'],
      is_bathroom_shared: formValues['is_bathroom_shared'],
      availability_365: formValues['availability_365'],
      property_type: formValues['property_type'],
      room_type: formValues['room_type'],
      latitude: formValues['latitude'],
      longitude: formValues['longitude'],
      instant_bookable: formValues['instant_bookable'],
      city: formValues['city'],

      is_work_email_verified: hostInfo.is_work_email_verified,
      host_identity_verified: hostInfo.host_identity_verified,
      host_is_superhost: hostInfo.host_is_superhost,
      host_response_time: hostInfo.host_response_time,
      is_phone_verified: hostInfo.is_phone_verified,
      is_email_verified: hostInfo.is_email_verified,

      review_scores_checkin: accommodationValues.review_scores_checkin,
      review_scores_communication: accommodationValues.review_scores_communication,
      number_of_reviews: accommodationValues.number_of_reviews,
      review_scores_cleanliness: accommodationValues.review_scores_cleanliness
    }
    console.log(formValues)

  }

  const onChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  };

  const onChangeAmenity = (e) => {
    const { name } = e.target;
    formValues[name] ? setFormValues({...formValues, [name]: false}) : setFormValues({...formValues, [name]: true})
  };

  const closePopup = () => {
    setPopup({...popup, 'trigger': false});
  }

  return (
    <div>
      <div className='app__new app__container'>
      <h1>Add a new <span className='app__homepage-title-primary-color'>AirBnb</span></h1>
        <form className='app__new-form' onSubmit={handleSubmit}>
          <div className='app__new-form-inputs'>
            Give us some general information on your Airbnb!
            <input {...inputs.name} value={formValues[inputs.name.name]} onChange={onChange} />
            <input {...inputs.address} value={formValues[inputs.address.name]} onChange={onChange} />
            <input {...inputs.latitude} value={formValues[inputs.address.latitude]} onChange={onChange} />
            <input {...inputs.longitude} value={formValues[inputs.address.longitude]} onChange={onChange} />
            <select name="city" id="city" onChange={onChange} required>
              <option value="" disabled selected hidden>City</option>
              {cities.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            <hr />
            What does it offer?
            <input {...inputs.accommodates} value={formValues[inputs.address.accommodates]} onChange={onChange} />
            <input {...inputs.beds} value={formValues[inputs.address.beds]} onChange={onChange} />
            <input {...inputs.bedrooms} value={formValues[inputs.address.bedrooms]} onChange={onChange} />
            <input {...inputs.n_bathrooms} value={formValues[inputs.address.n_bathrooms]} onChange={onChange} />
            <select name="is_bathroom_shared" id="is_bathroom_shared" onChange={onChange} required>
              <option value="" disabled selected hidden>Are bathrooms shared?</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <select name="property_type" id="property_type" onChange={onChange} required>
              <option value="" disabled selected hidden>Property type</option>
              {property_type.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            <select name="room_type" id="room_type" onChange={onChange} required>
              <option value="" disabled selected hidden>Room type</option>
              {room_type.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            <hr /> 
            We need some information on the availability     
            <input {...inputs.availability_365} value={formValues[inputs.address.availability_365]} onChange={onChange} />
            <select name="instant_bookable" id="instant_bookable" onChange={onChange} required>
              <option value="" disabled selected hidden>Is instant bookable?</option>
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
            {loading ? 'Add Airbnb' : 'Request Sent..'}
          </button>
        </form>
      </div>

      <Popup trigger={popup['trigger']} title={popup['title']} description={popup['description']} onClick={closePopup} />
    </div>
  )
}

export default AddAirbnb