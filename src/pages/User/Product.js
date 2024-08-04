import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import contactus from '../../assets/bg1.png';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product1.jpg';
import './user.css';
import { Card } from 'antd';

const { Meta } = Card;

const Product = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Product</h1>
            <h3>View Our Gallery Our Image Album Will Help You To Get An Idea About Our Work</h3>
          </div>
        </div>
      </div>
      <h1 className='all-product'>All Products</h1>
      <div className="product-container">
        <Card
          hoverable
          className="product-card"
          cover={<img alt="Product 1" src={product1} className="product-image" />}
        >
          <Meta title="Product 1" description="Description for product 1" />
        </Card>
        <Card
          hoverable
          className="product-card"
          cover={<img alt="Product 2" src={product2} className="product-image" />}
        >
          <Meta title="Product 2" description="Description for product 2" />
        </Card>
        <Card
          hoverable
          className="product-card"
          cover={<img alt="Product 3" src={product3} className="product-image" />}
        >
          <Meta title="Product 3" description="Description for product 3" />
        </Card>
        <Card
          hoverable
          className="product-card"
          cover={<img alt="Product 4" src={product4} className="product-image" />}
        >
          <Meta title="Product 4" description="Description for product 4" />
        </Card>
      </div>
    </section>
  );
};

export default Product;
