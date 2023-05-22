import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import { Homepage, AddAirbnb } from './pages';

import './App.scss';

const App = () => {
    return (
      <>
        <div className="app">
          <BrowserRouter basename='/'>
              <Routes>
                <Route path='/' element={<Layout />} exact>
                  <Route index element={<Homepage />} />
                  <Route path='add-new' element={<AddAirbnb />} />
                </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
}

export default App