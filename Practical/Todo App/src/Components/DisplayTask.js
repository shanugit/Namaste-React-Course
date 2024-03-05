const DisplayTask = () => {
  let taskArr = ["Wakeup", "Get Ready", "GoTo Office"];
  return (
    <div id="display-tasks">
      <ul id="display-list">
        {taskArr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTask;
