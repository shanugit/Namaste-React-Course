import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - List items [about us, contact us]
 *  - Cart
 * body
 *  - search bar
 *  - RestaurentLists
 *      - RestaurentCards
 *         - Image
 *         - Name
 *         - Rating
 *         - Cusines
 * footer
 *  - Links
 */

// React functional component with one html tag
// naming convenstion is Pascal case: industry best practices
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React Class - 04
  </h1>
);

// This react element will be embedded in composite component differently
// naming convention is camel case
const title = (
  <h1 id="title2" key="t2">
    This is title2: which is a react element but not functional component
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      {/* this is how functional components are embeded in composite elements */}
      <Title />
      {/* This is how normal react element (JSX) embeded in composite element*/}
      {title}
      <h2>Namaste React course: composite components</h2>
      <h2>This is second tag of the composite component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
