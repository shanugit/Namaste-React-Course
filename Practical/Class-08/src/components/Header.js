import { useState } from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";

export const Header = () => {
  let [loginFlag, setLoginFlag] = useState("false");
  function setFlag() {
    if (loginFlag === "false") setLoginFlag("true");
    else setLoginFlag("false");
  }
  return (
    <div id="header">
      <Title />
      <h1 style={{ color: "orangered" }}>Swiggy</h1>
      <div id="nav-items">
        <ul>
          <li id="home">
            <Link to="/">Home</Link>
          </li>
          <li id="aboutme">
            <Link to="/aboutme">About Me</Link>
          </li>
          <li id="contactus">
            <Link to="/contactme">Contact Me</Link>
          </li>
        </ul>
      </div>
      {loginFlag == "false" ? (
        <button
          id="login"
          onClick={() => {
            setFlag();
          }}
          style={{ borderRadius: "15px", backgroundColor: "green" }}
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
