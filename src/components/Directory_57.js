import React, { useState } from "react";
import "./Directory_57.scss";
import MenuItem_57 from "./MenuItem_57";
import items from "../utils/MenuItemData";

export default function Directory_57() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <div>
      <div className="directory-menu">
        {menuItems.map((item) => {
          const { id, name, remoteUrl, size } = item;
          return (
            <MenuItem_57
              id={id}
              name={name}
              remoteUrl={remoteUrl}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
}
