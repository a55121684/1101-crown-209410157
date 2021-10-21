import React from "react";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { Link } from "react-router-dom";
import "./Header_57.scss";

export default function Header_57() {
  return (
    <div>
      <div class="header">
        <Link to="/" class="logo-container">
          <Logo />
        </Link>
        <div class="options">
          <Link to="/shop_57" class="option">
            Shop
          </Link>
          <Link to="/contact_57" class="option">
            Contact
          </Link>
          <Link to="/signin_57" class="option">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
