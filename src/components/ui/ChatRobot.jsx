// src/components/ChatRobot.jsx
import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FaPaperPlane,
  FaHome,
  FaComments,
  FaTimes,
  FaSearch,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const ChatRobot = () => {
  const [showChat, setShowChat] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+971",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setShowForm(false); // Hide form after submission
    // Show chat interface or confirmation message
  };

  return (
    <>
      {/* Bot Icon */}
      {!showChat && (
        <div
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 w-50 h-50 z-50 cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <DotLottieReact
            src="https://lottie.host/9b9ef5f4-73aa-41a1-9cdc-ab5a29398587/KdQYjNOWSv.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      {/* ChatBot UI */}
      {showChat && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 relative">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              Hi there <span>👋</span>
            </h2>
            <p className="text-sm mt-1 opacity-90">
              {showForm ? "Let's get started" : "How can I help you today?"}
            </p>

            {/* Close Button */}
            <button
              onClick={() => {
                setShowChat(false);
                setShowForm(false);
              }}
              className="absolute top-2 right-2 bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
            >
              <FaTimes className="text-xs" />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {showForm ? (
              // User Information Form
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <FaUser className="text-gray-400" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <FaEnvelope className="text-gray-400" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <FaPhone className="text-gray-400" /> Phone
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-20 p-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    >
                      <option value="+971">+971</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="flex-1 p-2 border-t border-r border-b border-gray-300 rounded-r-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Start Chat
                </button>
              </form>
            ) : (
              // Default Chat Interface
              <>
                <div className="mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                    <p className="text-gray-800">
                      Hello! I'm your virtual assistant. Ask me anything or
                      search our help center.
                    </p>
                  </div>
                </div>

                {/* Help Center Search */}
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search help center..."
                      className="w-full p-2 pl-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <FaSearch className="absolute left-2 top-3 text-gray-400 text-xs" />
                  </div>
                </div>

                {/* New Conversation Button */}
                <div
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-gray-100 p-3 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <div className="text-gray-800 text-sm font-semibold">
                    New Conversation
                  </div>
                  <FaPaperPlane className="text-blue-500" />
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  We typically reply in a few minutes
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-3 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">Powered by YourCompany</p>
          </div>

          {/* Bottom Navigation */}
          {!showForm && (
            <div className="bg-white text-gray-600 flex justify-between items-center px-4 py-2 border-t">
              <button className="flex flex-col items-center text-xs p-2 hover:text-blue-600 transition-colors">
                <FaHome className="text-lg" />
                <span>Home</span>
              </button>
              <button className="flex flex-col items-center text-xs p-2 text-blue-600">
                <FaComments className="text-lg" />
                <span>Chat</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatRobot;
