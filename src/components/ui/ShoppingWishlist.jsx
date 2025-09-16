import React, { useState } from "react";
import { useRouter } from "next/router";
import Item1 from '../../assets/HandBags/close-up-kitted-bag-nature.jpg';
import Item2 from '../../assets/Watche/rendering-smart-home-device (1).jpg';
import Item3 from '../../assets/Cufflinks/high-angle-thimble-silk-arrangement.jpg';
import Item4 from '../../assets/Jewelry/view-luxurious-golden-ring-felt-jewelry-display (1).jpg';

import { 
  FiTruck, 
  FiPhone, 
  FiMessageSquare, 
  FiGift 
} from 'react-icons/fi';
import Image from "next/image";

// Replace the icon components in the JSX accordingly
const ShoppingWishlist = () => {
   const router = useRouter();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Floral Print Wrap Dress",
      category: "Women",
      color: "Blue",
      size: "42",
      price: 20.50,
      image: Item2,
      inStock: true,
      rating: 4.5,
      reviews: 24
    },
    {
      id: 2,
      name: "Black Handbag with Scarf",
      category: "Women",
      color: "Black",
      size: "Medium",
      price: 30.50,
      image: Item1,
      inStock: true,
      rating: 4.2,
      reviews: 18
    },
    {
      id: 3,
      name: "Luxury Leather Heels",
      category: "Women",
      color: "Beige",
      size: "38",
      price: 45.75,
      image: Item3,
      inStock: false,
      rating: 4.8,
      reviews: 32
    },
    {
      id: 4,
      name: "Golden Jewelry Set",
      category: "Women",
      color: "Gold",
      size: "One Size",
      price: 89.99,
      image: Item4,
      inStock: true,
      rating: 4.7,
      reviews: 41
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (item) => {
    // In a real application, this would add the item to the cart
    alert(`${item.name} moved to cart!`);
  };

  const moveAllToCart = () => {
    // In a real application, this would add all items to the cart
    alert("All items moved to cart!");
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  // Function to render star ratings
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-极.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Wishlist</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm md:text-base">{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}</span>
            {wishlistItems.length > 0 && (
              <div className="flex gap-2">
                <button 
                  onClick={moveAllToCart}
                  className="px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm"
                >
                  Add All to Cart
                </button>
                <button 
                  onClick={clearWishlist}
                  className="px-3 py-2 md:px-4 md:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-xs md:text-sm"
                >
                  Clear Wishlist
                </button>
              </div>
            )}
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Your wishlist is empty</h3>
            <p className="mt-1 text-gray-500">Save your favorite items here for later</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/shop")}
                className="px-6 py-3 bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Start Shopping
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {wishlistItems.map(item => (
                    <tr key={item.id}>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                            <button 
                              onClick={() => removeFromWishlist(item.id)}
                              className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
                              title="Remove from wishlist"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                            <p className="mt-1 text-xs text-gray-500">{item.category}</p>
                            <p className="mt-1 text-xs text-gray-500">Color: {item.color} | Size: {item.size}</p>
                            <div className="flex items-center mt-1">
                              <div className="flex items-center">
                                {renderRatingStars(item.rating)}
                                <span className="ml-1 text-xs text-gray-600">{item.rating}</span>
                              </div>
                              <span className="mx-2 text-gray-300">|</span>
                              <span className="text-xs text-gray-500">{item.reviews} reviews</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-base font-bold text-indigo-600">AED {item.price.toFixed(2)}</p>
                      </td>
                      <td className="py-4 px-6">
                        {item.inStock ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            In Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Out of Stock
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <button 
                          className={`px-4 py-2 rounded-lg font-medium ${item.inStock ? 
                            'bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white hover:opacity-90' : 
                            'bg-gray-200 text-gray-500 cursor-not-allowed'} transition-opacity`}
                          disabled={!item.inStock}
                          onClick={() => item.inStock && moveToCart(item)}
                        >
                          {item.inStock ? 'Add to Cart' : 'Notify Me'}
                        </button>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button 
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {wishlistItems.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-4 flex">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                      {!item.inStock && (
                        <div className="absolute top-1 left-1 bg-red-100 text-red-800 text-xs font-medium px-1.5 py-0.5 rounded">
                          Out of Stock
                        </div>
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                        <button 
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">{item.category}</p>
                      <p className="mt-1 text-xs text-gray-500">Color: {item.color} | Size: {item.size}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {renderRatingStars(item.rating)}
                          <span className="ml-1 text-xs text-gray-600">{item.rating}</span>
                        </div>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-xs text-gray-500">{item.reviews} reviews</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-base font-bold text-indigo-600">AED {item.price.toFixed(2)}</p>
                        <button 
                          className={`px-3 py-1.5 rounded-lg font-medium text-xs ${item.inStock ? 
                            'bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white hover:opacity-90' : 
                            'bg-gray-200 text-gray-500 cursor-not-allowed'} transition-opacity`}
                          disabled={!item.inStock}
                          onClick={() => item.inStock && moveToCart(item)}
                        >
                          {item.inStock ? 'Add to Cart' : 'Notify Me'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

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
    </div>
  );
};

export default ShoppingWishlist;