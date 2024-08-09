import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Card, Row, Col } from 'antd';
import './about.css';
import picture from '../../assets/chicken.jpg';
import CustomFooter from '../../components/Footer/CustomFooter';

const { Meta } = Card;

const Aboutus = () => {
  return (
    <section>
      <Navbar />
      <div className="aboutus-card">
        <Card hoverable>
          <Row gutter={16}>
            <Col span={8}>
              <img alt="example" src={picture} className="aboutus-image" />
            </Col>
            <Col span={8}>
              <img alt="example" src={picture} className="aboutus-image" />
            </Col>
            <Col span={8}>
              <img alt="example" src={picture} className="aboutus-image" />
            </Col>
            <Col span={22} className="aboutus-details">
              <h2 className="aboutus-title">Prisco Chicken Product</h2>
              <Meta
                description="Prisco chicken is a premium product known for its high quality and freshness. Our chicken is sourced from the best farms, ensuring that every bite is nutritious and delicious. Perfect for all your culinary needs."
              />
              <p>Read More...</p>
            </Col>
          </Row>
        </Card>
      </div>
      <CustomFooter />
    </section>
  );
};

export default Aboutus;
