import React from "react";
import ReactDOM from "react-dom/client";

// useing create element
const heading = React.createElement("h1", {}, "Namaste React Course");

// using JSX
// this is a react element
const heading2 = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

/**
 * We have components in react
 * 1. Functional component
 * 2. Class component
 */

// Functional component is a function which will return the react element :P
// The functional component has to start with capitle letter
const FunctionalComponent = function () {
  return (
    <div>
      <h1>Namaste React h1 tag</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // elemens are rendered like this
root.render(<functionalComponent />); // functional components are rendered like this
