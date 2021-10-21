import React from "react";
import "./ShopItem_57.scss";

export default function ShopItem_57({ name, remoteUrl, price }) {
  return (
    <div>
      <div className="collection-item">
        <img className="image" src={remoteUrl} />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <button className="custom-button">Add to Cart</button>
      </div>
    </div>
  );
}
