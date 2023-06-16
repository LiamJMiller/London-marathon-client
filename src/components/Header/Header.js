import { useState } from "react";
import usericon from "../../assets/icons/user-placeholder.svg";
import "./Header.scss";

export default function Header({ setLoggedIn }) {
  return (
    <header className="header">
      <h1 className="header__title">Coopers School</h1>
      <input
        type="text"
        className="header__searchbar"
        placeholder="search by name"
      />
      <div className="header__login-dropdown">
        <img src={usericon} alt="" />
        <p
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          Users name here \/
        </p>
      </div>
    </header>
  );
}
