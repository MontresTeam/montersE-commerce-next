import React from "react";

const SidebarItem = ({ icon, text, extraText, active, onClick, isMobile = false }) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center p-3 md:px-4 md:py-3 rounded-xl cursor-pointer transition
      ${active ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"} 
      ${isMobile ? "text-base" : "text-sm"}`}
    >
      <div className="flex items-center space-x-3">
        <span className="text-lg">{icon}</span>
        <span className={`font-medium ${isMobile ? "text-base" : "text-sm"}`}>{text}</span>
      </div>
      {extraText && <span className="text-xs text-gray-500">{extraText}</span>}
    </div>
  );
};

export default SidebarItem;