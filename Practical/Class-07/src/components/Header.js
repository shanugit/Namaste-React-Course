import { useState } from "react";
import { Title } from "./Title";

export const Header = () => {
  let [loginFlag, setLoginFlag] = useState("false");
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
      {loginFlag === "false" ? (
        <button id="login" onClick={setLoginFlag("true")}>
          Login
        </button>
      ) : (
        <button>Logout</button>
      )}
    </div>
  );
};
