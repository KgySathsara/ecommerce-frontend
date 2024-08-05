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
      <Card
        hoverable
        style={{
          width: 500,
        }}
      >
        <Row>
          <Col flex="100px">
            <img
              alt="example"
              src={ picture }
              className="aboutus-image"
            />
          </Col>
          <Col flex="auto" className="aboutus-details">
            <Meta title="Prisco Chicken Product" description="Prisco chicken is high quality product that is..." paragraph="Read More.." />
          </Col>
        </Row>
      </Card>
      <CustomFooter />
    </section>
  );
}

export default Aboutus;
