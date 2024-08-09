import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import Chiken from '../../../../components/Inside/Chiken';
import './PriscoChiken.css'; // Import the CSS file

const PriscoChiken = () => {
  return (
    <div className="PriscoChikenHome">
      <Navbar />
      <div className="content">
        <h1>Welcome to Prisco Ckicken</h1>
        <p>
          At Prisco Animal Feeds, we provide top-quality feed products for your livestock. Our
          commitment to excellence ensures your animals get the best nutrition available.
        </p>
      </div>
      <div className="Chiken">
        <Chiken />
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

export default PriscoChiken;
