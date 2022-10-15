import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuItems = ({ items }) => {
  return (
    <div className="menuItems">
      {items.map((item) => (
        <MenuItem key={item.uuid} item={item} />
      ))}
    </div>
  );
};

export default MenuItems;
