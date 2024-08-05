import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import contactus from '../../assets/bg1.png';
import { Card, Button } from 'antd';
import './user.css';

const Cart = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contact Us" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>CART</h1>
            <h3>Contact Us For Any Inquiry Related To Our Products</h3>
          </div>
        </div>
      </div>
      <div className="order-container">
        <Card
          title="Your Orders"
          bordered={false}
          style={{
            width: 400,
          }}
        >
          <Card
            type="inner"
            title="Order - P205243"
          >
            <p>Order ID - P205243</p>
            <p>Total Price - Rs. 5700.00</p>
            <p>Payment Method - Cash On Delivery</p>
            <p>Order Items - Broiler Stater (Quantity 1)</p>
            <Button type="primary">Order Status - Pending</Button>
          </Card>
        </Card>
      </div>
    </section>
  );
}

export default Cart;
