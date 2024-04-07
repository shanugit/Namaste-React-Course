import { useState } from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/isOnline";

export const Header = () => {
  let [loginFlag, setLoginFlag] = useState("false");
  function setFlag() {
    if (loginFlag === "false") setLoginFlag("true");
    else setLoginFlag("false");
  }
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-300 shadow-lg rounded-lg">
      <Title />
      <h1 className="py-8 text-orange-500">Swiggy</h1>
      <h1 className="py-8 text-green-600 text-lg">
        {isOnline ? "Online" : "Offline"}
      </h1>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/aboutme">About Me</Link>
          </li>
          <li className="px-2">
            <Link to="/contactme">Contact Me</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
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
