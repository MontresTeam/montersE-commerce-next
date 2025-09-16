import React, { useState } from "react";
import ProfileInformation from "./ProfileInformation";
import ProfileUpdate from "./ProfileUpdate";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main St, City",
    profilePicture: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {isEditing ? (
        <ProfileUpdate
          userData={userData}
          setUserData={setUserData}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileInformation
          userData={userData}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
};

export default ProfilePage;
