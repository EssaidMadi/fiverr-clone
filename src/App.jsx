import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Gig from "./pages/gig/gig";
import Gigs from "./pages/gigs/gigs";
import Orders from "./pages/orders/orders";
import MyGigs from "./pages/myGigs/myGigs";
import Add from "./pages/add/add";
import Message from "./pages/message/message";
import Messages from "./pages/messages/messages";
import "./App.css";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
