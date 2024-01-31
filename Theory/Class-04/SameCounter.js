import ReactDOM from "react-dom/client";
import { useState } from "react";

const MyApp2 = () => {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <MyButton counter={counter} setCounter={setCounter} />
      <MyButton counter={counter} setCounter={setCounter} />
    </div>
  );
};

const MyButton = ({ counter, setCounter }) => {
  function handleCounter() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button onClick={handleCounter}>Counter value {counter}</button>
    </div>
  );
};

const myApp2 = ReactDOM.createRoot(document.getElementById("root"));

myApp2.render(<MyApp2 />);
