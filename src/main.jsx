import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCourses from "./Pages/AllCourses.jsx";
import About from "./Pages/About.jsx";
import PricingPage from "./Pages/PricingPage.jsx";
import Journal from "./Pages/Journal.jsx";
import TeamMember from "./Pages/TeamMember.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: "/courses",
    element: (
      <>
        <AllCourses />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <TeamMember />
      </>
    ),
  },
  {
    path: "/pricing",
    element: (
      <>
        <PricingPage />
      </>
    ),
  },
  {
    path: "/journal",
    element: (
      <>
        <Journal />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ContactPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
