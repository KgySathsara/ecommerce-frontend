import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import contactus from '../../assets/bg1.png';
import './user.css';
import { Card, Button, Row, Col, InputNumber } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Product = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart.`);
  };

  const handleQuantityChange = (value, product) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [product]: value,
    }));
  };

  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>PRODUCT</h1>
            <h3>View Our Gallery. Our Image Album Will Help You To Get An Idea About Our Work</h3>
          </div>
        </div>
      </div>
      <h1 className="all-product">All Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <Card
            key={product.id}
            hoverable
            className="product-card"
            cover={<img alt={product.name} src={product.image_url} className="product-image" />}
          >
            <Meta title={product.name} description={product.description} />
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
            <Row gutter={16} align="middle" justify="space-between">
              <Col>
                <span>Quantity</span>
                <InputNumber
                  min={1}
                  value={quantity[product]}
                  onChange={(value) => handleQuantityChange(value, product)}
                  style={{ marginRight: 4, marginLeft: 8 }}
                />
              </Col>
              <Col>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Product;
