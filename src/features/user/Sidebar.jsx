import React from "react";
import { FaBox, FaHeart, FaBell, FaLanguage, FaSignOutAlt, FaUser, FaTruck, FaKey } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ activeSection, setActiveSection, isMobile = false }) => {
  return (
    <div className={isMobile ? "" : "md:col-span-1"}>
      <div className="space-y-2 md:space-y-3">
        <SidebarItem 
          active={activeSection === "orders"} 
          icon={<FaBox />} 
          text="My Orders" 
          onClick={() => setActiveSection("orders")}
          isMobile={isMobile}
        />
        <SidebarItem 
          active={activeSection === "profile"} 
          icon={<FaUser />} 
          text="Profile" 
          onClick={() => setActiveSection("profile")}
          isMobile={isMobile}
        />
        <SidebarItem 
          active={activeSection === "password"} 
          icon={<FaKey />} 
          text="Change Password" 
          onClick={() => setActiveSection("password")}
          isMobile={isMobile}
        />
        <SidebarItem 
          active={activeSection === "tracking"} 
          icon={<FaTruck />} 
          text="Live Tracking Order" 
          onClick={() => setActiveSection("tracking")}
          isMobile={isMobile}
        />
        <SidebarItem 
          icon={<FaHeart />} 
          text="Wishlist" 
          isMobile={isMobile}
        />
        <SidebarItem 
          icon={<FaBell />} 
          text="Notification" 
          isMobile={isMobile}
        />
        <SidebarItem
          icon={<FaLanguage />}
          text="Language"
          extraText="English (US)"
          isMobile={isMobile}
        />
        <SidebarItem 
          icon={<FaSignOutAlt />} 
          text="Logout" 
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default Sidebar;