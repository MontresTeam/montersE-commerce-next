import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import OrdersSection from "./OrdersSection";
import ProfileInformation from "./UserAccount/ProfileInformation";
import ProfileUpdate from "./UserAccount/ProfileUpdate";
import PasswordSection from "./PasswordSection";
import TrackingSection from "./OrderTracking/TrackingMap";

import watch from "../../assets/Watche/rendering-smart-home-device (1).jpg";
import bag from "../../assets/HandBags/close-up-kitted-bag-nature.jpg";
import jewlery from "../../assets/Clocks/8992.jpg";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("orders");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "Alex John",
    email: "alexjohn@gmail.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, New York, NY 10001",
    profilePicture: "",
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orders = [
    {
      id: 1,
      name: "Hermès Kelly Red Watch 20mm",
      price: 4000,
      date: "13:45, Jun 10, 2025",
      image: watch,
      status: "Delivered",
      tracking: "TRK123456789",
    },
    {
      id: 2,
      name: "Hermès Handbag",
      price: 2500,
      date: "09:30, Jun 5, 2025",
      image: bag,
      status: "In Transit",
      tracking: "TRK987654321",
    },
    {
      id: 3,
      name: "Luxury Jewelry Set",
      price: 5800,
      date: "14:15, May 28, 2025",
      image: jewlery,
      status: "Processing",
      tracking: "TRK456789123",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "orders":
        return <OrdersSection orders={orders} setActiveSection={setActiveSection} />;
      case "profile":
        return isEditingProfile ? (
          <ProfileUpdate
            userData={userData}
            setUserData={setUserData}
            onCancel={() => setIsEditingProfile(false)}
          />
        ) : (
          <ProfileInformation
            userData={userData}
            onEdit={() => setIsEditingProfile(true)}
          />
        );
      case "password":
        return <PasswordSection />;
      case "tracking":
        return <TrackingSection/>;
      default:
        return <OrdersSection orders={orders} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Mobile Header */}
      {isMobile && (
        <div className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold">Your Account</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-xl shadow p-4 md:p-6 mt-4 md:mt-6">
          {/* Header Section for Desktop */}
          {!isMobile && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Your Account</h1>
              <p className="text-gray-600">
                {userData.name}, Email: {userData.email}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Mobile Sidebar Overlay */}
            {isMobile && sidebarOpen && (
              <>
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-20"
                  onClick={() => setSidebarOpen(false)}
                ></div>
                <div className="fixed left-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-30 overflow-y-auto">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-semibold">Menu</h2>
                      <button 
                        onClick={() => setSidebarOpen(false)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <Sidebar 
                      activeSection={activeSection} 
                      setActiveSection={(section) => {
                        setActiveSection(section);
                        setSidebarOpen(false);
                      }} 
                      isMobile={true}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Sidebar for Desktop */}
            {!isMobile && (
              <div className="md:col-span-1">
                <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
              </div>
            )}

            {/* Main Content */}
            <div className="md:col-span-3">
              {isMobile && (
                <div className="mb-4">
                  <p className="text-gray-600 text-sm">
                    {userData.name}, Email: {userData.email}
                  </p>
                </div>
              )}
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;