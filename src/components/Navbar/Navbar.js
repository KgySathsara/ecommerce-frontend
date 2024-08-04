import React, { useState } from 'react';
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
