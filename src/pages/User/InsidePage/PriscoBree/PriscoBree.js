import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import Bree from '../../../../components/Inside/Bree';
import './PriscoBree.css'; // Import the CSS file

const PriscoBree = () => {
  return (
    <div className="PriscoBreeHome">
      <Navbar />
      <div className="content">
        <h1>Welcome to Prisco Breeders</h1>
        <p>
          At Prisco Animal Feeds, we provide top-quality feed products for your livestock. Our
          commitment to excellence ensures your animals get the best nutrition available.
        </p>
      </div>
      <div className="Bree">
        <Bree />
      </div>
        <div className="content">
        <p>
          At Prisco Animal Feeds, we provide top-quality feed products for your livestock. Our
          commitment to excellence ensures your animals get the best nutrition available.
        </p>
        </div>
    </div>
  );
};

export default PriscoBree;
