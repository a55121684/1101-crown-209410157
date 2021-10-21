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
      <div class="shop-page">
        <div class="collection-overview">
          <div class="collection-preview">
            <h1 class="title">Mens</h1>
            <div class="preview">
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

          <div class="collection-preview">
            <h2 class="title">Jackets</h2>
            <div class="preview">
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
