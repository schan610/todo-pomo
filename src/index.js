import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Layout from "./components/Layout/Layout";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import Todo from "./components/Todo/Todo";

const router = createBrowserRouter([
  {
    element: (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Layout />
        <Outlet />
      </LocalizationProvider>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
