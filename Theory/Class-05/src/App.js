import React from "react";
import ReactDOM from "react-dom/client";
// named import
// import Title from "./components/Header";
// default import
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

/**
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart
 * Body
 *  - Search Bar
 *  - RestaurentList
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - link
 *  - Copyright
 */

// This react element will be embedded in composite component differently
// naming convention is camel case
const title = (
  <h1 id="title2" key="t2">
    This is title2: which is a react element but not functional component
  </h1>
);

// React.Fragement: Its like a empty tag
//JSX must have one parent
const AppLayout = () => {
  return (
    // Every JSX component must have one root
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
