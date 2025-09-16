'use client';
import React, { useState } from 'react';
import ProductPage from '../features/product/ProductPage';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';



const ShopByBrand = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const [authAction, setAuthAction] = useState("login");
  
    const handleAuthAction = (action) => {
      setAuthAction(action);
      setModalIsOpen(true);
    };
  return (
    <div>
       <Navbar
        onSignUpClick={() => handleAuthAction("register")}
        onLoginClick={() => handleAuthAction("login")}
      />
      <ProductPage />
      <Footer/>
    </div>
  );
};

export default ShopByBrand; 