import React, { Fragment } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeatMap from './SeatMap';
import ReservationForm from './ReservationForm';
import ThankYou from './ThankYou';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<ReservationForm />} />
          <Route path="/reserve/:row/:number" element={<ReservationForm />}/>
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
