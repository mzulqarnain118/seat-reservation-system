import React, { Fragment,useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeatMap from './SeatMap';
import ReservationForm from './ReservationForm';
import ThankYou from './ThankYou';
// import './App.css';
import './SeatMap.css';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <ReservationForm  />
        {/* <Routes>
          <Route exact path="/" element={<ReservationForm setEnableThankYou={setEnableThankYou} />} />
          <Route path="/reserve/:row/:number" element={<ReservationForm />}/>
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes> */}
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
