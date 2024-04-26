import { useState, useContext } from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/isOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  let [loginFlag, setLoginFlag] = useState("false");
  function setFlag() {
    if (loginFlag === "false") setLoginFlag("true");
    else setLoginFlag("false");
  }
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
          <li className="px-2 bg-red-400 rounded-xl h-15 w-15">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {loginFlag == "false" ? (
        <button
          id="login"
          onClick={() => {
            setFlag();
          }}
          className="bg-green-600 rounded-lg w-11"
        >
          Login
        </button>
      ) : (
        <>
          <span className="p-10 font-bold text-red-900">{user.name}</span>
          <button
            onClick={() => {
              setFlag();
            }}
            className="bg-purple-800 rounded-lg w-11 text-white"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};
