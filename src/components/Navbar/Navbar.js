import React, { useState } from 'react';
import { Menu } from 'antd';
const items = [
  {
    label: 'HOME',
    key: '1',
  },
  {
    label: 'ABOUT PRISCO',
    key: '2',
  },
  {
    label: 'PRISCO GROUP',
    key: '3',
    children: [
      {
        label: 'Prisco Animal Feeds',
        key: '7',
      },
      {
        label: 'Prisco Chicken',
        key: '8',
      },
      {
        label: 'Prisco Breeders',
        key: '9',
      },
      {
        label: 'Prisco Plantations',
        key: '10',
      },
    ],
  },
  {
    label: 'PRODUCTS',
    key: '4',
  },
  {
    label: 'GALLERY',
    key: '5',
  },
  {
    label: 'CONTACT US',
    key: '6',
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;