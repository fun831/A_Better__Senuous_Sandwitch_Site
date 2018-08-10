import React, { Component } from 'react';
import Navbar from './navbar';

const Location = (locationName, address, number, hours) => {
  return (
      <div>
          <h3>{locationName}</h3>
          <p>{address}</p>
          <p>{number}</p>
          <p>{hours}</p>
      </div>
    );
  }

  export default Location