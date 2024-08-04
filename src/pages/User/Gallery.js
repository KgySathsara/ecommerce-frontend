import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CustomFooter from '../../components/Footer/CustomFooter'
import contactus from '../../assets/bg1.png';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg'; 
import gallery3 from '../../assets/a.jpg';
import gallery4 from '../../assets/gallery1.jpg';
import gallery5 from '../../assets/gallery2.jpg';
import gallery6 from '../../assets/a.jpg';
import './user.css';
import { Card } from 'antd';

const Gallery = () => {
  const images = [
    { src: gallery1, alt: 'Gallery 1', label: 'Chicks' },
    { src: gallery2, alt: 'Gallery 2', label: 'Gallery 2' },
    { src: gallery3, alt: 'Gallery 3', label: 'Gallery 3' },
    { src: gallery4, alt: 'Gallery 4', label: 'Gallery 4' },
    { src: gallery5, alt: 'Gallery 5', label: 'Gallery 5' },
    { src: gallery6, alt: 'Gallery 6', label: 'Gallery 6' }
  ];

  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>IMAGE GALLERY</h1>
            <h3>View Our Gallery. Our Image Album Will Help You To Get An Idea About Our Work</h3>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <Card
            key={index}
            hoverable
            className="gallery-card"
            cover={<img alt={image.alt} src={image.src} className="gallery-image" />}
          >
            <button className='gallery-button'>{image.label}</button>
          </Card>
        ))}
      </div>
      <CustomFooter />
    </section>
  );
};

export default Gallery;
