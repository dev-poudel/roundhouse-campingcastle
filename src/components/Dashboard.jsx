import React from "react";
import { Outlet } from "react-router-dom";
import SidebarDashboard from "./SidebarDashboard";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarDashboard />

      {/* Content Area - This will display the selected page */}
      <div className="flex-grow p-4">
        {/* Render the nested route content here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
