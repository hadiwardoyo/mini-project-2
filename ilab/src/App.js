import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { LoginPage, HomePage } from "./pages";

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
        <HomePage
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></HomePage>
      )}
    </div>
  );
}

export default App;
