import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import contactus from '../../assets/bg1.png';
import './user.css';

const Contactus = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>CONTACT US</h1>
            <h3>Contact Us For Any Inquiry Related To our Products</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
