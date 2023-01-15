import { useState } from "react";

const Search = () => {
  // this hook is used to create local state variable
  // first parameter is the variable and second one is the setter function to chnage the variable value
  let [searchTxt, setSearchTxt] = useState();
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-inout"
        placeholder="search here"
        value={searchTxt}
        onChange={(e) => {
          // searchTxt = e.target.value;
          setSearchTxt(e.target.value);
          console.log(searchTxt);
        }}
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
