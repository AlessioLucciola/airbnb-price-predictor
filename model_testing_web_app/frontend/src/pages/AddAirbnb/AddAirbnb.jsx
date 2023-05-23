import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AddAirbnb.scss';

function AddAirbnb() {
    const [formValues, setFormValues] = useState({ name: '', surname: '', email: '', phone: '', request: '', captcha: '' });
    const [focused, setFocused] = useState({ name: false, surname: false, email: false, phone: false, request: false, captcha: false });
    const [popup, setPopup] = useState({trigger: false, title: '', description: ''});
    const [loading, setLoading] = useState(0);

    const inputs = [
        {
          id: 'i1',
          name: 'name',
          type: 'text',
          placeholder: 'Nome*',
          label: 'name',
          errormessage: 'The name field can\'nt be empty!',
          required: true,
          focused: false
        },
        {
          id: 'i2',
          name: 'surname',
          type: 'text',
          placeholder: 'Cognome*',
          label: 'surname',
          errormessage: 'The surname field can\'t be empty',
          required: true
        },
        {
          id: 'i3',
          name: 'email',
          type: 'text',
          placeholder: 'Email*',
          label: 'email',
          errormessage: 'Inserire un indirizzo email valido!',
          pattern: '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9.])+[.]+[?:A-Za-z]+$',
          required: true
        },
        {
          id: 'i4',
          name: 'phone',
          type: 'text',
          placeholder: 'Telefono*',
          label: 'phone',
          errormessage: 'Inserire un numero di telefono valido!',
          pattern: '^(?:[+]?)(?:[0-9] ?){6,14}[0-9]$',
          required: true
        },
      ]

    return (
        <div>
            <div className='app__homepage app__container'>
                <h1>Add a new <span className='app__homepage-title-primary-color'>AirBnb</span></h1>
            </div>
        </div>
    )
}

export default AddAirbnb