import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';
//import './OrderManagement.css';

const OrderManagement = () => {
  return (
    <div className="order-management">
      <AdminNavbar />
      <div className="main-content">
        <Sidebar />
        <div className="management-content">
          <h2>Order Management</h2>
          {/* Add order management functionalities here */}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
