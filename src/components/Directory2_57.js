import React, { useState, useEffect } from "react";
import "./Directory_57.scss";
import axios from "axios";
import MenuItem_57 from "./MenuItem_57";

export default function Directory2_57() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItem = async (req, res) => {
      const Heroku_Url =
        "https://heroku-crown57.herokuapp.com/api_57/category_57";
      const { data } = await axios.get(Heroku_Url);
      console.log(data);
      setMenuItems(data);
    };
    fetchMenuItem();
  }, []);
  return (
    <div>
      <div className="directory-menu">
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_57
              id={id}
              name={name}
              remoteUrl={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
}
