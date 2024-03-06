import { useState, useEffect } from "react";

const DisplayTask = () => {
  let [tasks, setTasks] = useState([]);
  const addItemInList = (inputs) => {
    let input = inputs.trim();
    let t = tasks;
    t.push(input);
    console.log(tasks, inputs);
    if (t.length > 0) setTasks(t);
  };
  //   useEffect(() => {
  //     //   helper(input);
  //   }, [tasks]);
  console.log("render");
  //   if (tasks.length === 0) return <>...</>;
  return (
    <div>
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
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayTask;
