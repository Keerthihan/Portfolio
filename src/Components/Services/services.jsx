import React from 'react';
import './services.css';
import servicedata from '../../assets/services_data.js';
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {servicedata.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.S_NO}</h3>
            <h2>{service.S_NAME}</h2>
            <p>{service.S_DESC}</p>
            <div className="read-more">
              <p>Read More</p>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;