import ReactDOM from "react-dom/client";
import { useState } from "react";

const MyApp = () => {
  return (
    <>
      <h2>Button with seperate counter</h2>
      <MyButton />
      <MyButton />
    </>
  );
};

const MyButton = () => {
  let [counter, setCounter] = useState(0);
  function handleCounter() {
    setCounter(counter + 1);
  }
  return <button onClick={handleCounter}>Counter value is {counter}</button>;
};

const App = ReactDOM.createRoot(document.getElementById("root"));

App.render(<MyApp />);
