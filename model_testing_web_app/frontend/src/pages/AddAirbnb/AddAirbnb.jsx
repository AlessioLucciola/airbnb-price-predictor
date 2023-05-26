import React, { useState } from 'react';
import axios from 'axios';

import { Popup } from '../../components';
import './AddAirbnb.scss';

function AddAirbnb() {
  const [formValues, setFormValues] = useState({ name: '', address: '', children_friendly: false });
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
      placeholder: 'Address of the Airbnb',
      label: 'address',
      required: true,
      focused: false,
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    let formData = {
      name: formValues['name'],
      surname: formValues['surname'],
      email: formValues['email'],
      phone: formValues['phone'],
      request: formValues['request'],
      captcha: formValues['captcha']
    }
    console.log(formValues)
    setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': ''});
  }

  const onChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  };

  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: checked
    }));
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
            Give me some general information on your Airbnb!
            <input {...inputs.name} value={formValues[inputs.name.name]} onChange={onChange} />
            <input {...inputs.address} value={formValues[inputs.address.name]} onChange={onChange} />
            What are the amenities?
            <div className='app__new-form-inputs-checkboxes'>
              <label>
                <input type="checkbox" id="children_friendly" name="children_friendly" checked={formValues.children_friendly} onChange={onChangeCheckbox}/>
                <span>Children friendly</span>
              </label>
              <label>
                <input type="checkbox" id="pet_friendly" name="pet_friendly" checked={formValues.pet_friendly} onChange={onChangeCheckbox}/>
                <span>Pet friendly</span>
              </label>
              <label>
                <input type="checkbox" id="has_tv" name="has_tv" checked={formValues.has_tv} onChange={onChangeCheckbox}/>
                <span>Has TV</span>
              </label>
              <label>
                <input type="checkbox" id="has_bathtub" name="has_bathtub" checked={formValues.has_bathtub} onChange={onChangeCheckbox}/>
                <span>Has bathtub</span>
              </label>
              <label>
                <input type="checkbox" id="has_self_checkin" name="has_self_checkin" checked={formValues.has_self_checkin} onChange={onChangeCheckbox}/>
                <span>Has self-checkin</span>
              </label>
              <label>
                <input type="checkbox" id="has_private_entrance" name="has_private_entrance" checked={formValues.has_private_entrance} onChange={onChangeCheckbox}/>
                <span>Private entrance</span>
              </label>
              <label>
                <input type="checkbox" id="has_security_devices" name="has_security_devices" checked={formValues.has_security_devices} onChange={onChangeCheckbox}/>
                <span>Security devices</span>
              </label>
              <label>
                <input type="checkbox" id="has_laundry" name="has_laundry" checked={formValues.has_laundry} onChange={onChangeCheckbox}/>
                <span>Has laundry</span>
              </label>
              <label>
                <input type="checkbox" id="has_patio" name="has_patio" checked={formValues.has_patio} onChange={onChangeCheckbox}/>
                <span>Has patio</span>
              </label>
              <label>
                <input type="checkbox" id="has_paid_parking" name="has_paid_parking" checked={formValues.has_paid_parking} onChange={onChangeCheckbox}/>
                <span>Paid parking nearby</span>
              </label>
              <label>
                <input type="checkbox" id="has_fireplace" name="has_fireplace" checked={formValues.has_fireplace} onChange={onChangeCheckbox}/>
                <span>Has fireplace</span>
              </label>
              <label>
                <input type="checkbox" id="is_long_term_stays_allowed" name="is_long_term_stays_allowed" checked={formValues.is_long_term_stays_allowed} onChange={onChangeCheckbox}/>
                <span>Long term stays allowed</span>
              </label>
              <label>
                <input type="checkbox" id="has_city_skyline_view" name="has_city_skyline_view" checked={formValues.has_city_skyline_view} onChange={onChangeCheckbox}/>
                <span>City skyline view</span>
              </label>
              <label>
                <input type="checkbox" id="is_smoking_allowed" name="is_smoking_allowed" checked={formValues.is_smoking_allowed} onChange={onChangeCheckbox}/>
                <span>Smocking allowed</span>
              </label>
              <label>
                <input type="checkbox" id="has_free_parking" name="has_free_parking" checked={formValues.has_free_parking} onChange={onChangeCheckbox}/>
                <span>Free parking nearby</span>
              </label>
              <label>
                <input type="checkbox" id="has_heating_cooling_systems" name="has_heating_cooling_systems" checked={formValues.has_heating_cooling_systems} onChange={onChangeCheckbox}/>
                <span>Has cooling-heating system</span>
              </label>
              <label>
                <input type="checkbox" id="has_elevator" name="has_elevator" checked={formValues.has_elevator} onChange={onChangeCheckbox}/>
                <span>Has elevator</span>
              </label>
              <label>
                <input type="checkbox" id="has_cooking_basics" name="has_cooking_basics" checked={formValues.has_cooking_basics} onChange={onChangeCheckbox}/>
                <span>Has cooking basics</span>
              </label>
              <label>
                <input type="checkbox" id="has_internet" name="has_internet" checked={formValues.has_internet} onChange={onChangeCheckbox}/>
                <span>Has internet</span>
              </label>
              <label>
                <input type="checkbox" id="has_breakfast" name="has_breakfast" checked={formValues.has_breakfast} onChange={onChangeCheckbox}/>
                <span>Has breakfast</span>
              </label>
              <label>
                <input type="checkbox" id="host_greets_you" name="host_greets_you" checked={formValues.host_greets_you} onChange={onChangeCheckbox}/>
                <span>Host greets you</span>
              </label>
            </div>
          </div>
          <button type='submit'>
            {loading ? 'Add you Airbnb' : 'Request Sent..'}
          </button>
        </form>
      </div>

      <Popup trigger={popup['trigger']} title={popup['title']} description={popup['description']} onClick={closePopup} />
    </div>
  )
}

export default AddAirbnb