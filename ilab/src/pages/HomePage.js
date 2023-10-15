import React from "react";
import { Navbar } from "../components";

const HomePage = (props) => {
  const { loginStatus, loginCbHandler } = props;
  return (
    <div>
      <div className="container">
        <h1>test page</h1>
      </div>
    </div>
  );
};

export default HomePage;
