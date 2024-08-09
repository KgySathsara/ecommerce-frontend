import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import Plantation from '../../../../components/Inside/Plantation';
import './PriscoPlantation.css'; // Import the CSS file

const PriscoPlantation = () => {
  return (
    <div className="PriscoPlantationHome">
      <Navbar />
      <div className="content">
        <h1>Welcome to Prisco Plantation</h1>
        <p>
          At Prisco Animal Feeds, we provide top-quality feed products for your livestock. Our
          commitment to excellence ensures your animals get the best nutrition available.
        </p>
      </div>
      <div className="Plant">
        <Plantation />
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

export default PriscoPlantation;
