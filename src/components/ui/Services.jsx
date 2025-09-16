import React from "react";
import { FaTags, FaTruck, FaLock, FaShieldAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaTags size={28} className="text-blue-800" />,
    title: "Great Value",
    desc: "Most Popular Brands With Widest Range Of Selection At Best Prices.",
  },
  {
    id: 2,
    icon: <FaTruck size={28} className="text-blue-800" />,
    title: "Nationwide Delivery",
    desc: "Over 20,000 Pincodes Serviceable Across India.",
  },
  {
    id: 3,
    icon: <FaLock size={28} className="text-blue-800" />,
    title: "Secure Payment",
    desc: "Partnered With India's Most Popular And Secure Payment Solutions.",
  },
  {
    id: 4,
    icon: <FaShieldAlt size={28} className="text-blue-800" />,
    title: "Buyer Protection",
    desc: "Committed To Buyer Interests To Provide A Smooth Shopping Experience.",
  },
  {
    id: 5,
    icon: <FaHeadset size={28} className="text-blue-800" />,
    title: "365 Days Help Desk",
    desc: "Most Popular Brands With Widest Range Of Selection At Best Prices.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center text-center px-6 py-8 hover:bg-gray-50 transition-all duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-gray-800 font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
