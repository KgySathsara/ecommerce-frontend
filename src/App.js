import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import ProductManagement from './pages/Admin/ProductManagement';
import OrderManagement from './pages/Admin/OrderManagement';
import UserHome from './pages/User/Home';
import UserAboutPrisco from './pages/User/Aboutus';
import UserProduct from './pages/User/Product';
import UserGallery from './pages/User/Gallery';
import Contactus from './pages/User/Contactus';
import Gallery from './pages/Admin/Gallery';
import Message from './pages/Admin/Message';
import Setting from './pages/Admin/Setting';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/UserAboutPrisco" element={<UserAboutPrisco />} />
        <Route path="/UserProduct" element={<UserProduct />} />
        <Route path="/UserGallery" element={<UserGallery />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/admin/gallery" element={<Gallery />} />
        <Route path="/admin/message" element={<Message />} />
        <Route path="/admin/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
};

export default App;

