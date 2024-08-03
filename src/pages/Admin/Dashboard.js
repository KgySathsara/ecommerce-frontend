import React from 'react';
import { Layout, Dropdown, Menu, Avatar, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Navbar/Sidebar';
import logo from '../../assest/a.jpg';
import DashboardBox from '../../pages/Admin/DashboardBox';
import './Dashboard.css'; // Ensure you have the CSS file for custom styling

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const handleMenuClick = (e) => {
    if (e.key === 'logout') {
      // Handle logout logic here
      console.log('Logout clicked');
    }
  };

  const userMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="admin-dashboard">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>Dashboard</h2>
            <Dropdown overlay={userMenu} trigger={['click']}>
              <Button 
                type="text" 
                icon={<Avatar icon={<UserOutlined />} />} 
                className="user-avatar"
              />
            </Dropdown>
          </div>
        </Header>
        <Content className="dashboard-content">
          <div className="cover-photo">
            <img src={logo} alt='logo' />
          </div>
          <div className="content-container">
            <DashboardBox />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
