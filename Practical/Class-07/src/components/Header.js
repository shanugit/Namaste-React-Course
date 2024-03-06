import { useState } from "react";
import { Title } from "./Title";

export const Header = () => {
  let [loginFlag, setLoginFlag] = useState("false");
  function setFlag() {
    if (loginFlag === "false") setLoginFlag("true");
    else setLoginFlag("false");
  }
  return (
    <div id="header">
      <Title />
      <h1>Chuku's Kitchen</h1>
      <div id="nav-items">
        <ul>
          <li id="home">Home</li>
          <li id="aboutme">About me</li>
          <li id="contactus">Contact Us</li>
        </ul>
      </div>
      {console.log(loginFlag)}
      {loginFlag == "false" ? (
        <button
          id="login"
          onClick={() => {
            setFlag();
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setFlag();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};
