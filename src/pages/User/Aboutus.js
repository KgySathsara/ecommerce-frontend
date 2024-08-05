import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Card, Row, Col } from 'antd';
import './user.css';
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
            <Col span={16} className="aboutus-details">
              <Meta
                title="Prisco Chicken Product"
                description="Prisco chicken is a high-quality product that is..."
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
