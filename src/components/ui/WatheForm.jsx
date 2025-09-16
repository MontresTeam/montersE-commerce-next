import { FaUpload, FaCamera, FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import watchBanner from "../../assets/person-doing-their-delicate-job.jpg";
import Image from "next/image";

export default function WatchService() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceOptions = [
    "Battery Replacement",
    "Movement Service",
    "Crystal Replacement",
    "Band Adjustment",
    "Water Resistance Testing",
    "Cleaning & Polishing",
    "Dial Repair",
    "Vintage Restoration",
  ];

  const watchTypes = [
    "Automatic",
    "Quartz",
    "Mechanical",
    "Chronograph",
    "Diver",
    "Pilot",
    "Dress",
    "Smartwatch",
    "Other",
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };



  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const selectService = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full flex items-center justify-center bg-gray-50 px-3 xs:px-4 sm:px-6 py-8 xs:py-10 sm:py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {/* Left: Banner Image - Show on all screens but adjust size */}
        <div className="block md:hidden mb-6">
          <Image
            src={watchBanner}
            alt="Watch Banner"
            className="w-full h-48 xs:h-56 sm:h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={watchBanner}
            alt="Watch Banner"
            className="w-full h-full object-cover rounded-l-2xl shadow-lg"
          />
        </div>

        {/* Right: Form */}
        <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl md:rounded-r-2xl p-4 xs:p-5 sm:p-6 md:p-8 border border-gray-100 flex flex-col justify-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-center mb-4 xs:mb-5 sm:mb-6 text-blue-800">
            EXPERT WATCH REPAIR SERVICES
          </h2>

          {/* Product Name */}
          <div className="mb-3 xs:mb-4">
            <label className="block text-gray-700 mb-1 xs:mb-2 font-medium text-xs xs:text-sm sm:text-base">
              ENTER PRODUCT / SERVICE NAME
            </label>
            <input
              type="text"
              placeholder="Enter Product / Service Name"
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
            />
          </div>

          {/* Manufacture Year + Watch Type */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 mb-3 xs:mb-4">
            <div>
              <label className="block text-gray-700 mb-1 xs:mb-2 font-medium text-xs xs:text-sm sm:text-base">
                MANUFACTURE YEAR
              </label>
              <input
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                placeholder="Year"
                className="w-full px-3 xs:px-4 py-2 xs:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 xs:mb-2 font-medium text-xs xs:text-sm sm:text-base">
                WATCH TYPE
              </label>
              <select className="w-full px-3 xs:px-4 py-2 xs:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs xs:text-sm sm:text-base">
                <option value="">Type</option>
                {watchTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Type of Services */}
          <div className="mb-3 xs:mb-4 relative">
            <label className="block text-gray-700 mb-1 xs:mb-2 font-medium text-xs xs:text-sm sm:text-base">
              TYPE OF SERVICES
            </label>
            <div
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer flex justify-between items-center text-xs xs:text-sm sm:text-base"
              onClick={toggleDropdown}
            >
              <span className="truncate">{selectedService || "Select Service"}</span>
              <FaChevronDown
                className={`transition-transform flex-shrink-0 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {serviceOptions.map((service) => (
                  <div
                    key={service}
                    className={`px-3 xs:px-4 py-2 xs:py-2.5 hover:bg-blue-50 cursor-pointer text-xs xs:text-sm sm:text-base ${
                      selectedService === service ? "bg-blue-100" : ""
                    }`}
                    onClick={() => selectService(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upload */}
          <div className="mb-4 xs:mb-5 sm:mb-6">
            <label className="block text-gray-700 mb-1 xs:mb-2 font-medium text-xs xs:text-sm sm:text-base">
              UPLOAD WATCH IMAGE
            </label>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4">
              <label className="flex-1 flex items-center justify-center px-3 xs:px-4 py-2 xs:py-2.5 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 text-xs xs:text-sm sm:text-base">
                <FaUpload className="mr-1 xs:mr-2 text-blue-600 text-xs xs:text-sm" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

             
            </div>

            {selectedImage && (
              <div className="mt-3 xs:mt-4">
                <p className="text-xs xs:text-sm text-gray-600 mb-1 xs:mb-2">Selected Image:</p>
                <Image
                  src={selectedImage}
                  alt="Watch preview"
                  className="h-28 xs:h-32 object-contain border rounded mx-auto"
                />
              </div>
            )}
          </div>

          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 xs:py-2.5 sm:py-3 rounded-lg font-semibold transition duration-300 shadow-md text-xs xs:text-sm sm:text-base">
            BOOK SERVICE
          </button>
        </div>
      </div>
    </div>
  );
}