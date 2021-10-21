import React, { useState } from "react";
import "./ShopTwoPage_57.scss";
import mensData from "../utils/Mens";
import jacketsData from "../utils/Jackets";
import ShopItem_57 from "../components/ShopItem_57";

export default function ShopTwoPage_57() {
  const [jackets, setJackets] = useState(jacketsData);
  const [mens, setMens] = useState(mensData);
  return (
    <div>
      <div className="shop-page">
        <div className="collection-overview">
          <div className="collection-preview">
            <h1 className="title">Mens</h1>
            <div className="preview">
              {mens.map((item) => {
                const { id, name, remoteUrl, price } = item;
                return (
                  <ShopItem_57
                    id={id}
                    name={name}
                    remoteUrl={remoteUrl}
                    price={price}
                  />
                );
              })}
            </div>
          </div>

          <div className="collection-preview">
            <h2 className="title">Jackets</h2>
            <div className="preview">
              {jackets.map((item) => {
                const { id, name, remoteUrl, price } = item;
                return (
                  <ShopItem_57
                    id={id}
                    name={name}
                    remoteUrl={remoteUrl}
                    price={price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
