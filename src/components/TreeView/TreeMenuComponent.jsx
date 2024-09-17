import React from "react";
import TreeMenu from "./TreeMenu";
import menus from "./data";

const TreeMenuComponent = () => {
  return (
    <div className="bg-gray-900 p-6 text-white w-64 min-h-screen ">
      <h2 className="text-xl font-bold mb-4">Tree Menu</h2>
      <TreeMenu items={menus} />
    </div>
  );
};

export default TreeMenuComponent;
