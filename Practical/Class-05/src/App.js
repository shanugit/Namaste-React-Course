import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <>
      <h1>Hello There, Lets see if this works</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title />);
