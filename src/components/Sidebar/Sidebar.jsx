import React from "react";
import {
  MdSpaceDashboard,
  MdOutlineAreaChart,
  MdTableChart,
} from "react-icons/md";
import "../../index.css";
import { FaNetworkWired } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col bg-gray-900 shadow-xl">
      <i>
        <SidebarIcon icon={<MdSpaceDashboard size="28" text="tooltip" />} />
      </i>
      <i>
        <SidebarIcon icon={<MdOutlineAreaChart size="28" />} />
      </i>
      <i>
        <SidebarIcon icon={<MdTableChart size="28" />} />
      </i>
      <Divider />
      <i>
        <SidebarIcon icon={<FaNetworkWired size="28" />} />
      </i>
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
