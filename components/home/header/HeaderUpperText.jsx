import React from "react";
import { TbCategory2 } from "react-icons/tb";
import "./header.css";

const HeaderUpperText = () => {
  return (
    <div className="header_top_msg">
      {/* ICON */}
      <TbCategory2 className="icon_height" />
      <p>Lorem ipsum dolor</p>
    </div>
  );
};

export default HeaderUpperText;
