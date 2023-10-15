import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { LoginPage } from "./pages";
import { MainComponents, Navbar } from "./components";

function App() {
  const [loginStatus, setloginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setloginStatus(result);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setloginStatus(true);
    } else {
      setloginStatus(false);
    }
  });

  return (
    <div className="App">
      {!loginStatus ? (
        <LoginPage loginCbHandler={loginCbHandler}></LoginPage>
      ) : (
        <>
          <Navbar
            loginStatus={loginStatus}
            loginCbHandler={loginCbHandler}
          ></Navbar>
          <MainComponents
            loginStatus={loginStatus}
            loginCbHandler={loginCbHandler}
          ></MainComponents>
        </>
      )}
    </div>
  );
}

export default App;
