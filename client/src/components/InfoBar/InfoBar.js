import React from 'react';
import './InfoBar.scss';

import closeIcon from "./../../icons/closeIcon.png";
import onlineIcon from "./../../icons/onlineIcon.png";

function InfoBar({room}) {
  return (
    <div className="InfoBar">
      <div className="InfoBar-left">
        <img
          className="InfoBar-left-onlineIcon"
          aria-hidden
          src={onlineIcon}
          alt="online image"
        />
        <h3>
          Room Name: <span>{room}</span>{" "}
        </h3>
      </div>
      <div className="InfoBar-right">
        <a href="/">
          <img src={closeIcon} aria-hidden alt="close image" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
