import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../../contexts/CartContext';
import Navbar from '../../components/Navbar/Navbar';
import contactus from '../../assets/bg1.png';
import { Card, Button } from 'antd';
import './user.css';


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePayment = () => {
    navigate('/Payment'); // Redirect to /Payment
  };

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
          {cart.map((item) => (
            <Card
              key={item.id}
              type="inner"
              title={`Order - ${item.name}`}
            >
              <p>Order ID - {item.id}</p>
              <p>Total Price - Rs. {item.price * item.quantity}</p>
              <p>Order Items - {item.name} (Quantity {item.quantity})</p>
              <Button type="primary" onClick={handlePayment}>Payment</Button>
              <Button type="primary" onClick={() => removeFromCart(item.id, item.type)} style={{ marginLeft: '10px' }}>
                Remove
              </Button>
            </Card>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default Cart;
