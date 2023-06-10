import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss'

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activePage, setActivePage] = useState('');

  const handleMenuOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  }

  useEffect(() => {
    updateActivePage();
  }, []);

  const updateActivePage = (name) => {
    if (name) {
      setActivePage(name);
    } else {
      const currentPage = (window.location.href).substring((window.location.href).lastIndexOf('/') + 1);
      setActivePage(currentPage);
    }
  }

  return (
    <>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <Link to='/'><img src={images.logo} alt='logo' onClick={() => updateActivePage()} /></Link>
        </div>
        <ul className='app__navbar-links'>
          <li className={`app__flex p-text ${activePage === '' ? 'link-active' : ''}`} key='l-Homepage' onClick={() => updateActivePage()}>
            <Link to='/'>Homepage</Link>
          </li>
          <li className={`app__flex p-text ${activePage === 'add-new' ? 'link-active' : ''}`} key='l-AddAirbnb' onClick={() => updateActivePage()}>
            <Link to='/add-new'>Add Airbnb</Link>
          </li>
        </ul>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={(e) => handleMenuOnClick(e)}/>

          <motion.div initial={{ width: 0 }} animate={toggle ? { width: 300 } : { width: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
            <motion.span initial={{ width: 0 }} animate={toggle ? { width: 70 } : {width: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <HiX onClick={(e) => handleMenuOnClick(e)} />
            </motion.span>

            <ul className='app__navbar-links'>
              <li className={`app__flex p-text ${activePage === '' ? 'link-active' : ''}`} key='lm-Homepage' onClick={(e) => {handleMenuOnClick(e); updateActivePage()}}>
                <Link to='/'>Homepage</Link>
              </li>
              <li className={`app__flex p-text ${activePage === 'add-new' ? 'link-active' : ''}`} key='lm-AddAirbnb' onClick={(e) => {handleMenuOnClick(e); updateActivePage()}}>
                <Link to='/add-new'>Add Airbnb</Link>
              </li>
            </ul>
          </motion.div>

        </div>
      </nav>
    </>
  )
}

export default Navbar