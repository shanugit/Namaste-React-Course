import { useState } from "react";

const RestaurentCard = () => {
  return (
    <div className="card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lj8pq0qmkvzcxsi3s1zc"></img>
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h3>4.2 stars</h3>
    </div>
  );
};

const Body = () => {
  // this is how we create local variable in js
  let txt = "KFC";

  // this is how we create local variable in react
  // this we need to see and get the input form out input box
  const [searchText, setSearchText] = useState();

  const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            setSearchClicked("true");
          }}
        >
          Search - {searchText}
        </button>
      </div>
      <h1>Check Search Click - {searchClicked}</h1>
      <div>
        <RestaurentCard />
      </div>
    </>
  );
};

export default Body;
