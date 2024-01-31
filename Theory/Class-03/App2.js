import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>New Heading with JSX</h1>;

const Title = () => {
  return <h1>Hello Suman</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {/* we can pass this jsx coode inside a functional component like this. */}
      {heading}
      {/* If we want to pass another functional component here then we can use the below syntax. */}
      <Title />
      {/* Another way of adding functional component is to call the function, as end of the day its just function */}
      {Title()}
      <h1>This is a functional header component</h1>
      <h2>
        This functional component is nothing but normal js function which will
        return react component
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
