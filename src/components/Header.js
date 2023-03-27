import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch()
  function handleLogout(){
    dispatch(authActions.logout())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
