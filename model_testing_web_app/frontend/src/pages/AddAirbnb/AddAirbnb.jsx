import React, { useState } from 'react';
import axios from 'axios';

import { Popup } from '../../components';
import './AddAirbnb.scss';

function AddAirbnb() {
  const [formValues, setFormValues] = useState({ name: '', address: '' });
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

    if (formValues.captcha === '') {
      setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': 'Per continuare devi completare il ReCaptcha'});
    } else {
      axios.post('api/sendMail.php', formData)
      .then(function (response) {
          if (response.status === 200)
          {
            setPopup({'trigger': true, 'title': 'Richiesta Inviata!', 'description': response.data.message});
            setLoading(false);
            //removeValueFromFields();
          } else if (response.status === 500) {
            setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': response.data.message});
            setLoading(false);
          } else if (response.status === 401) {
            setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': response.data.message});
            setLoading(false);
          } else {
            setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': response.data.message});
            setLoading(false);
          }
      })
      .catch(function (error) {
          setPopup({'trigger': true, 'title': 'Si è verificato un errore!', 'description': 'Si è verificato un errore interno al server. Contattaci telefonicamente per risolvere il problema.'});
          setLoading(false);
      });
    }
  }

  const onChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
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
            What are your amenities?
            <div className='app__new-form-inputs-checkboxes'>
              <span>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label>Children friendly</label>
              </span>
              <span>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label>Pet friendly</label>
              </span>
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