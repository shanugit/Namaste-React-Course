import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
import ContactMe from "./components/ContactMe";
import RestaurentMenu from "./components/RestaurentMenu";
import LoginForm from "./components/LoginForm";
import Profile from "./components/ProfileClass";
import AboutMe2 from "./components/AboutMe";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";

// on demand loading or lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Suman",
    mail: "suman@mail.com",
  });
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutme",
        element: <AboutMe2 />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contactme",
        element: <ContactMe />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
