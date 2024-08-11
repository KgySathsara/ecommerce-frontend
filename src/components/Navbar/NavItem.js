import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import './Navbar.css';

const Navbar = () => {
  const [current, setCurrent] = useState('1');

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to="/">HOME</Link>,
      key: '1',
    },
    {
      label: <Link to="/UserAboutPrisco">ABOUT PRISCO</Link>,
      key: '2',
    },
    {
      label: 'PRISCO GROUP',
      key: '3',
      children: [
        {
          label: <Link to="/PriscoAnimalFeeds">Prisco Animal Feeds</Link>,
          key: '7',
        },
        {
          label: <Link to="/PriscoChicken">Prisco Chicken</Link>,
          key: '8',
        },
        {
          label: <Link to="/PriscoBreeders">Prisco Breeders</Link>,
          key: '9',
        },
        {
          label: <Link to="/PriscoPlantation">Prisco Plantations</Link>,
          key: '10',
        },
      ],
    },
    {
      label: <Link to="/UserProduct">PRODUCTS</Link>,
      key: '4',
    },
    {
      label: <Link to="/UserGallery">GALLERY</Link>,
      key: '5',
    },
    {
      label: <Link to="/Contactus">CONTACT US</Link>,
      key: '6',
    },
  ];

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} title={item.label}>
          {item.children.map((child) => (
            <Menu.Item key={child.key}>{child.label}</Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
  };

  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" className="navbar-logo" />
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="navbar-menu"
      >
        {items.map((item) => renderMenuItem(item))}
      </Menu>
    </div>
  );
};

export default Navbar;
