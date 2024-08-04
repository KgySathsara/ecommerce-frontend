import React, { useState } from 'react';

import { Menu, Avatar, Badge, Space, Dropdown } from 'antd';
import { CaretDownFilled, UserOutlined, ShoppingCartOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import './Navbar.css';

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
    dropdown: true,
    children: [
      {
        label: <Link to="/prisco-animal-feeds">Prisco Animal Feeds</Link>,
        key: '7',
      },
      {
        label: <Link to="/prisco-chicken">Prisco Chicken</Link>,
        key: '8',
      },
      {
        label: <Link to="/prisco-breeders">Prisco Breeders</Link>,
        key: '9',
      },
      {
        label: <Link to="/prisco-plantations">Prisco Plantations</Link>,
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

const settings = [
  {
    label: 'Cart',
    key: 'cart',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: 'Account Settings',
    key: 'account',
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: <PoweroffOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('1');
  
=======
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    label: 'HOME',
    key: '/',
  },
  {
    label: 'ABOUT PRISCO',
    key: '/about',
  },
  {
    label: 'PRISCO GROUP',
    key: 'prisco-group',
    children: [
      {
        label: 'Prisco Animal Feeds',
        key: '/priscoanimalfeeds',
      },
      {
        label: 'Prisco Chicken',
        key: '/PriscoChiken',
      },
      {
        label: 'Prisco Breeders',
        key: '/Priscobreeders',
      },
      {
        label: 'Prisco Plantations',
        key: '/PriscoPlantation',
      },
    ],
  },
  {
    label: 'PRODUCTS',
    key: '/products',
  },
  {
    label: 'GALLERY',
    key: '/gallery',
  },
  {
    label: 'CONTACT US',
    key: '/contact',
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('/');
  const navigate = useNavigate();


  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

};

export default Navbar;
