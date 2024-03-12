import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const DisplayTask = () => {
  let [tasks, setTasks] = useState(["Laddu"]);
  const addItemInList = (inputs) => {
    let input = inputs.trim();
    let t = tasks;
    t.push(input);
    console.log(tasks, inputs);
    if (t.length > 0) setTasks(t);
  };
  useEffect(() => {
    console.log("Use Effect");
  });
  console.log("render");
  return (
    <div id="todo-app">
      <div id="add-task">
        <input id="input-box" placeholder="Add task here..." />
        <button
          id="add-btn"
          onClick={() => {
            const getInput = document.getElementById("input-box").value;
            addItemInList(getInput);
          }}
        >
          Add Task
        </button>
      </div>
      <div id="display-task">
        <ol>
          {/* {console.log(tasks)} */}
          {tasks.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DisplayTask;
