import React from "react";
import ReactDOM from "react-dom/client";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";

const App = () => {
  return (
    <div id="app-layout">
      <AddTask />
      <DisplayTask />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
