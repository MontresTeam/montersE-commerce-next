"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";
import Item1 from '../../assets/HandBags/black-bag-with-scarf.jpg';
import Item2 from '../../assets/Watche/closeup-shot-hand-watch-with-bstrap-reflective-surface.jpg';
import { 
  FiTruck, 
  FiPhone, 
  FiMessageSquare, 
  FiGift 
} from 'react-icons/fi';
import Image from "next/image";

const ShoppingCart = () => {
  const router = useRouter();
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Floral Print Wrap Dress",
      category: "Women",
      color: "Blue",
      size: "42",
      price: 20.50,
      quantity: 2,
      image: Item2,
      total: 41.00
    },
    {
      id: 2,
      name: "Black Handbag with Scarf",
      category: "Women",
      color: "Black",
      size: "Medium",
      price: 30.50,
      quantity: 1,
      image: Item1,
      total: 30.50
    }
  ]);
  const [subtotal, setSubtotal] = useState(71.50);
  const [discount, setDiscount] = useState(4.00);
  const [total, setTotal] = useState(67.50);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedQuantity = newQuantity;
        const updatedTotal = item.price * updatedQuantity;
        return { ...item, quantity: updatedQuantity, total: updatedTotal };
      }
      return item;
    });
    
    const newSubtotal = updatedItems.reduce((sum, item) => sum + item.total, 0);
    const newTotal = newSubtotal - discount;
    
    setItems(updatedItems);
    setSubtotal(newSubtotal);
    setTotal(newTotal);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    const newSubtotal = updatedItems.reduce((sum, item) => sum + item.total, 0);
    const newTotal = newSubtotal - discount;
    
    setItems(updatedItems);
    setSubtotal(newSubtotal);
    setTotal(newTotal);
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "SAVE10") {
      const newDiscount = 10;
      const newTotal = subtotal - newDiscount;
      setDiscount(newDiscount);
      setTotal(newTotal);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-500 text-sm md:text-base">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="mt-1 text-gray-500">Start shopping to add items to your cart</p>
                <button
                  onClick={() => navigate("/shop")}
                  className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm divide-y">
                {items.map(item => (
                  <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start">
                    <div className="w-full sm:w-24 h-40 sm:h-24 mb-4 sm:mb-0 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-md object-cover"
                      />
                    </div>
                    
                    <div className="sm:ml-4 flex-1 w-full">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-base">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                          <p className="text-sm text-gray-500">Color: {item.color} | Size: {item.size}</p>
                          <p className="text-lg font-medium text-gray-900 mt-2 sm:hidden">AED {item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                          aria-label="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex items-center border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="w-10 text-center border-x py-1 block">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <p className="hidden sm:block text-lg font-medium text-gray-900 mr-2">AED {item.price.toFixed(2)}</p>
                          <p className="text-lg font-bold text-indigo-600">
                            AED {item.total.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">AED {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount</span>
                  <span>- AED {discount.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-indigo-600">AED {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Apply Coupon</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 border rounded-l-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button 
                    onClick={applyCoupon}
                    className="bg-gray-800 text-white px-4 rounded-r-lg hover:bg-black transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/Chekout")}
                  className="w-full px-4 py-3 text-white rounded-lg bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] hover:from-[#164275] hover:to-[#005099] transition-colors font-medium"
                  disabled={items.length === 0}
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => navigate("/shop")}
                  className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Bottom Info Section */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <FiTruck className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">Free Shipping</p>
            <p className="text-xs md:text-sm text-gray-500">When you spend AED 50+</p>
          </div>
        </div>
        
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <FiPhone className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">Call Us Anytime</p>
            <p className="text-xs md:text-sm text-gray-500">+97142671124</p>
          </div>
        </div>
        
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <FiMessageSquare className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">Chat With Us</p>
            <p className="text-xs md:text-sm text-gray-500">24-hour support</p>
          </div>
        </div>
        
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <FiGift className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">Gift Cards</p>
            <p className="text-xs md:text-sm text-gray-500">For your loved ones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;