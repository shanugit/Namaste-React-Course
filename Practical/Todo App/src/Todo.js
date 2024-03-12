import React from "react";
import ReactDOM from "react-dom/client";
// import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";

const TodoApp = () => {
  return (
    <div id="todo-app">
      {/* <AddTask /> */}
      <DisplayTask />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TodoApp />);
