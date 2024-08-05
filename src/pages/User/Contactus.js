import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CustomFooter from '../../components/Footer/CustomFooter'
import contactus from '../../assets/bg1.png';
import { Card, Divider, Button, Form, Input, InputNumber } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
import './user.css';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 20 } },
};

const Contactus = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>CONTACT US</h1>
            <h3>Contact Us For Any Inquiry Related To our Products</h3>
          </div>
        </div>
      </div>
      <div className="contactus-content">
        <Card title={<span className="card-title">Quick Contact</span>} bordered={false} className="contactus-card">
          <p>Call us, Email us or Visit us!</p>
          <PhoneFilled />
          <p>+ 94 712 345 678</p>
          <p>+ 94 712 345 678</p>
          <Divider />
          <MailFilled />
          <p>fNqFP@example.com</p>
        </Card>

        <Form
          {...formItemLayout}
          variant="filled"
          className="contactus-form"
        >
          <h1 className="form-title">We Love To Hear From You</h1>
          <h3 className="form-subtitle">Send your quotation requests, inquiries, suggestions and etc.</h3>
          <Divider />
          <Form.Item
            name="Name"
            rules={[
              {
                required: true,
                message: 'Please input your full name!',
              },
            ]}
          >
            <Input placeholder="Full Name*" />
          </Form.Item>

          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input a valid email!',
              },
            ]}
          >
            <Input placeholder="Email*" />
          </Form.Item>

          <Form.Item
            name="Phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <InputNumber
              style={{
                width: '100%',
              }}
              placeholder="Phone*"
            />
          </Form.Item>

          <Form.Item
            name="Subject"
            rules={[
              {
                required: true,
                message: 'Please input the subject!',
              },
            ]}
          >
            <Input placeholder="Subject*" />
          </Form.Item>

          <Form.Item
            name="Message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <h4>Message:</h4>
            <Input.TextArea placeholder="Message*" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <CustomFooter />
    </section>
  );
};

export default Contactus;
