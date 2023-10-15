import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const loginHandler = () => {
    loginCbHandler(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
  };

  return (
    <div>
      <div className="Header">
        <div class="header-left">
          <img src="https://infotech.umm.ac.id/assets/img/logo.png" alt="" />
        </div>
        <div class="header-right">
          {!loginStatus ? (
            <a className="btn " onClick={() => loginHandler()}>
              Login
            </a>
          ) : (
            <a className="btn " onClick={() => logoutHandler()}>
              Log Out
            </a>
          )}
        </div>
        <ul className="nav justify-content-center nav-underline">
          <li className="nav-item ">
            <Link className="nav-link" aria-current="page" to="#">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/praktikan">
              Praktikan
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/matkul">
              Mata Kuliah
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              list praktikum
            </Link>
          </li>
          <div className="nav-item"></div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
