/**
 * In this class we learnt about crating React element which are tags in html
 * We get to know about Parcel - Which is a bundler
 * This parcel bundler is really powerfull and empowers React to to do the following -
 *
 * 1. HMR - Hot Module Replacement - (If we change and save our file it will automatically reload the client by using)
 *      File watcher algorithm - Parcel use this algorithm which was ariten in C++
 * 2. Bundling
 * 3. MINIFY
 * 4. Cleaning our code
 * 5. dev and production build - Super fast build algorithm
 * 6. Image optimization
 * 7. Caching while development - thats why after first build the later build take very less time
 * 8. HTTPS us in local
 * 9.Manages port number if we run two app in local
 * 10. Zero config
 * 11. Transitive dependency - one package depends on many other packages.
 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {},
  "Namaste React class 02 practice!!!"
);

const suman = React.createElement(
  "h1",
  {},
  "1 point for starting all over again."
);

const heading2 = React.createElement("h2", { key: 1 }, "This is a h2 tag");

const container = React.createElement("div", { key: 2 }, [
  heading,
  heading2,
  suman,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
