import ReactDOM from "react-dom/client";
import { useState } from "react";

let Item_Arr = ["Cricket", "Badminton", "Football"];

let CheckBox = () => {
  let [items, setItems] = useState(Item_Arr);
  function handleClick(index) {
    let tmp = [];
    for (let i in items) {
      if (i != index) tmp.push(Item_Arr[i]);
    }
    setItems(tmp);
  }
  console.log(items);
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item} <button onClick={handleClick}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const checkBoxRoot = ReactDOM.createRoot(document.getElementById("root"));

checkBoxRoot.render(<CheckBox />);
