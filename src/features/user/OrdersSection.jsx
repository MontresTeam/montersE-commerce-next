import Image from "next/image";
import React from "react";
import { FaBox, FaTruck, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

function OrdersSection({ orders, setActiveSection }) {
  // Timeline steps
  const timelineSteps = [
    { label: "Processing", icon: <FaBox className="text-yellow-500 text-lg" /> },
    { label: "In Transit", icon: <FaTruck className="text-blue-500 text-lg" /> },
    { label: "Delivered", icon: <FaCheckCircle className="text-green-500 text-lg" /> },
  ];

  // Get current step index
  const getCurrentStep = (status) => {
    switch (status) {
      case "Processing":
        return 0;
      case "In Transit":
        return 1;
      case "Delivered":
        return 2;
      default:
        return 0;
    }
  };

  return (
    <div className="bg-white rounded-lg py-4 md:py-8">
      <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8 px-4 md:px-0">Your Orders</h1>

      {/* Orders List */}
      <div className="bg-white overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {orders.map((order) => {
            const currentStep = getCurrentStep(order.status);

            return (
              <li key={order.id} className="px-4 py-6">
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    Order #{order.id}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
                    Tracking: {order.tracking}
                  </p>
                </div>

                {/* Product Info */}
                <div className="mt-4 flex flex-col sm:flex-row sm:justify-between">
                  <div className="flex">
                    <Image
                      className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-md mr-4"
                      src={order.image}
                      alt={order.name}
                    />
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-gray-900">
                        {order.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Ordered on {order.date}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-gray-900 mt-1">
                        ${order.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 sm:mt-0 flex flex-wrap gap-2 sm:flex-col sm:items-end">
                    <button className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-900 px-2 py-1 sm:px-0 sm:py-0 sm:mb-2">
                      View Details
                    </button>
                    <button className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-900 px-2 py-1 sm:px-0 sm:py-0 sm:mb-2">
                      Buy Again
                    </button>
                    <button
                      onClick={() => setActiveSection("tracking")}
                      className="flex items-center text-xs sm:text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
                    >
                      <FaMapMarkerAlt className="mr-1 sm:mr-2" />
                      Track Live
                    </button>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-6">
                  <div className="flex items-center justify-between relative">
                    {timelineSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center relative w-1/3"
                      >
                        {/* Line Connector */}
                        {index < timelineSteps.length - 1 && (
                          <div
                            className={`absolute top-2 left-1/2 h-1 w-full -translate-x-1/2 ${
                              index < currentStep ? "bg-indigo-600" : "bg-gray-300"
                            }`}
                            style={{ zIndex: 0 }}
                          ></div>
                        )}

                        {/* Step Circle */}
                        <div
                          className={`rounded-full p-2 z-10 ${
                            index <= currentStep ? "bg-indigo-600" : "bg-gray-200"
                          }`}
                        >
                          {step.icon}
                        </div>

                        {/* Step Label */}
                        <p
                          className={`mt-2 text-xs text-center ${
                            index <= currentStep
                              ? "text-indigo-600 font-semibold"
                              : "text-gray-400"
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default OrdersSection;