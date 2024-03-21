import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import RestaurentMenu from "./components/RestaurentMenu";
import LoginForm from "./components/LoginForm";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        element: <AboutMe />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
