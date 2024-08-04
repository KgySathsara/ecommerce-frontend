import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
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
import PriscoAnimalFeeds from './pages/User/InsidePage/priscoAnimal/PriscoAnimalFeeds';
import PriscoChiken from './pages/User/InsidePage/PriscoChiken/PriscoChiken';
import PriscoBree from './pages/User/InsidePage/PriscoBree/PriscoBree';
import PriscoPlantation from './pages/User/InsidePage/PriscoPlantation/PriscoPlantation';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

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

        <Route path="/PriscoAnimalFeeds" element={<PriscoAnimalFeeds />} />
        <Route path="/PriscoChiken" element={<PriscoChiken />} />
        <Route path="/Priscobreeders" element={<PriscoBree />} />
        <Route path="/PriscoPlantation" element={<PriscoPlantation />} />
      </Routes>
    </Router>
  );
};

export default App;

