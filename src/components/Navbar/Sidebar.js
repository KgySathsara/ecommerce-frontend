import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Product Management</li>
        <li>Order Management</li>
        <li>Users</li>
      </ul>
    </div>
  );
};

export default Sidebar;
