import React from "react";
import ReactDOM from "react-dom/client";

const pageName = React.createElement(
  "h2",
  {},
  "This is a new learning journy!!"
);

const routine = React.createElement(
  "h2",
  {},
  "Every day lets code for sometime during night!"
);

const finalDiv = React.createElement("div", {}, [pageName, routine]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(finalDiv);
