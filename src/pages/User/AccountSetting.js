import React from 'react';
import { Button, Form, Input, Col, Row } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import contactus from '../../assets/a.jpg';
import './user.css';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const AccountSetting = () => (
  <>
    <Navbar />
    <div className="contactus-container">
      <img src={contactus} alt="Contact Us" className="contactus-image" />
      <div className="contactus-overlay">
        <div className="contactus-text">
          <h1>ACCOUNT SETTING</h1>
          <h3>Contact Us For Any Inquiry Related To Our Products</h3>
        </div>
      </div>
    </div>
    <div className="account-setting-container">
      <h2 className="account-setting-header">Your Personal Information</h2>
      <Form {...formItemLayout} className="account-form">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[{ required: true, message: 'Please input your first name!' }]}
              className="account-form-item"
            >
              <Input placeholder='First Name'/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last name"
              rules={[{ required: true, message: 'Please input your last name!' }]}
              className="account-form-item"
            >
              <Input placeholder='Last Name'/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              className="account-form-item"
            >
              <Input placeholder='Username'/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
              className="account-form-item"
            >
              <Input placeholder='Email'/>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="mobileNumber"
          label="Mobile Number"
          rules={[{ required: true, message: 'Please input your mobile number!' }]}
          className="account-form-item"
        >
          <Input placeholder="Mobile Number"/>
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please input your address!' }]}
          className="account-form-item"
        >
          <Input.TextArea placeholder="Land Mark, City, Province, Zip..." />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24, style: { textAlign: 'center' } }}>
          <Button type="primary" htmlType="submit">
            Update Details
          </Button>
        </Form.Item>
      </Form>
    </div>
  </>
);

export default AccountSetting;
