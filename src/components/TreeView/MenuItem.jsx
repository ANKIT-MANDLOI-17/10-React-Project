import React, { useState } from "react";
import TreeMenu from "./TreeMenu";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ menu }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <li className="mb-2 ">
      <div
        onClick={menu.children ? toggleMenu : null}
        className={`cursor-pointer text-gray-200 hover:text-blue-400 ${
          menu.children && "font-semibold"
        }`}
      >
        <p className="flex items-center gap-3">
          {" "}
          {menu.label}
          {menu.children ? (
            <span>{open ? <FaMinus /> : <FaPlus />}</span>
          ) : null}
        </p>
      </div>
      {menu.children && open && (
        <div className="ml-4 mt-1 border-l border-gray-500">
          <TreeMenu items={menu.children} />
        </div>
      )}
    </li>
  );
};

export default MenuItem;
