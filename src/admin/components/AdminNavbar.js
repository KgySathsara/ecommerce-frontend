import React from 'react';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <h1>Admin Panel</h1>
      <ul>
        <li>Dashboard</li>
        <li>Products</li>
        <li>Orders</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
