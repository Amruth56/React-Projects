import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebar top elements */}
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="" />

        {/* To start a new Chat */}
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>

        {/* Recent chat History */}
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is react...</p>
          </div>
        </div>
      </div>

      {/* sidebar bottom elements */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon}></img>
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon}></img>
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon}></img>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
