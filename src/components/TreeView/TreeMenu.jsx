import React from "react";
import MenuItem from "./MenuItem";

const TreeMenu = ({ items }) => {
  return (
    <ul className="pl-4 ">
      {items.map((menu) => (
        <MenuItem key={menu.label} menu={menu} />
      ))}
    </ul>
  );
};

export default TreeMenu;
