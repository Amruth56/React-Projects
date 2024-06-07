import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  // creating a state variable for sidebar functionality
  const [extended, setExtended] = useState(false);

   

  return (
    <div className="sidebar">
      {/* sidebar top elements */}
      <div className="top">
        <img onClick={()=> setExtended(prev=>!prev)} className="menu" src="/src/assets/menu_icon.png" alt="" />

        {/* To start a new Chat */}
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

    {extended ? 
        /* Recent chat History */
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is react...</p>
          </div>
        </div>
        : null }
      </div>

      {/* sidebar bottom elements */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon}></img>
         {extended ? <p>Help</p>  : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon}></img>
          {extended ?<p>Activity</p> :null }
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon}></img>
          {extended ?<p>Settings</p> : null }
        </div>
      </div> 
    </div>
  );
};

export default Sidebar;
