import React from "react";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { Link } from "react-router-dom";
import "./Header_57.scss";

export default function Header_57() {
  return (
    <div>
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link to="/shop_57" className="option">
            Shop
          </Link>
          <Link to="/contact_57" className="option">
            Contact
          </Link>
          <Link to="/signin_57" className="option">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
