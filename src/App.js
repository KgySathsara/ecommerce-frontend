import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/pages/Dashboard';
import ProductManagement from './admin/pages/ProductManagement';
import OrderManagement from './admin/pages/OrderManagement';
import UserHome from './user/pages/Home';
import ProductList from './user/pages/ProductList';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/" element={<UserHome />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;

