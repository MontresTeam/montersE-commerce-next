import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const TrackingMap = ({ trackingNumber, currentStatus }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
        <FaMapMarkerAlt className="text-indigo-600 mr-2" />
        Live Tracking
      </h2>

      {/* Tracking Info */}
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Tracking Number:</span> {trackingNumber}
      </p>
      <p className="text-gray-700 mb-6">
        Current Status:{" "}
        <span className="font-semibold text-indigo-600">{currentStatus}</span>
      </p>

      {/* Map Section */}
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center relative">
        <FaMapMarkerAlt className="text-4xl text-indigo-600 absolute" />
        <span className="ml-2 text-gray-600">Live Map Placeholder</span>
      </div>

      {/* Small note */}
      <p className="mt-4 text-sm text-gray-500">
        This map will show the live location of your package. Integrate with
        Google Maps or React Leaflet to display actual tracking data.
      </p>
    </div>
  );
};

export default TrackingMap;
