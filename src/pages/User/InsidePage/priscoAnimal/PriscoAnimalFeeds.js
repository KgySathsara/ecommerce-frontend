import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
//import CustomFooter from '../../../../components/Footer/CustomFooter';
import './PriscoAnimalFeeds.css'; // Import the CSS file
//import Image from '../../../../assest/Animal-Feed.jpg'; // Uncomment and correct the path

const PriscoAnimalFeeds = () => {
  return (
    <div className="PriscoHome">
      <Navbar />
      <div className="content">
        <h1>Welcome to Prisco Animal Feeds</h1>
        <p>
          At Prisco Animal Feeds, we provide top-quality feed products for your livestock. Our
          commitment to excellence ensures your animals get the best nutrition available.
        </p>
        </div>
    </div>
  );
};

export default PriscoAnimalFeeds;
