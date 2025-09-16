import Image from "next/image";
import React from "react";
import { FaUser, FaEdit } from "react-icons/fa";

const ProfileInformation = ({ userData, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Profile Information</h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {userData.profilePicture ? (
              <Image
                src={userData.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUser className="text-3xl text-gray-400" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{userData.name}</h3>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>
        <button
          onClick={onEdit}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
        >
          <FaEdit className="text-sm" />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <h4 className="text-md font-medium mb-3">Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Phone Number</p>
            <p className="font-medium">{userData.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Address</p>
            <p className="font-medium">{userData.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
