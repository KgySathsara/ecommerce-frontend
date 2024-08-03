import React, { useState } from 'react';
import { Layout, Form, Input, Button, Upload, message, Row, Col, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Navbar/Sidebar'; // Ensure this component is styled properly
import './Setting.css'; // Optional: add your own styles if needed

const { Header, Sider, Content } = Layout;

const UserSettings = () => {
  const [form] = Form.useForm();
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setProfileImage(URL.createObjectURL(info.file.originFileObj));
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    // Handle form submission, e.g., send data to the server
  };

  return (
    <Layout className="user-settings">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>User Settings</h2>
          </div>
        </Header>
        <Content className="settings-content">
          <Row justify="center">
            <Col span={12}>
              <Card title="User Settings" className="settings-card">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                >
                  <Form.Item
                    label="Profile Photo"
                    name="profilePhoto"
                  >
                    <Upload
                      showUploadList={false}
                      customRequest={handleImageChange}
                    >
                      <Button icon={<UploadOutlined />}>Upload Photo</Button>
                    </Upload>
                    {profileImage && (
                      <img
                        src={profileImage}
                        alt="Profile"
                        style={{ width: 100, height: 100, marginTop: 10, borderRadius: '50%' }}
                      />
                    )}
                  </Form.Item>

                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[{ required: true, message: 'Please input your new password!' }]}
                  >
                    <Input.Password placeholder="Enter new password" />
                  </Form.Item>

                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please confirm your new password!' }]}
                  >
                    <Input.Password placeholder="Confirm new password" />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Save Changes
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserSettings;
