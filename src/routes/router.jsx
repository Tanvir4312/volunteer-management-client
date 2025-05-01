import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "./PrivateRoute";

import AllVolunteer from "../pages/AllVolunteer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: 'add-volunteer',
    element:<PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
  },
  {
    path: 'all-volunteer-need-posts',
    element: <PrivateRoute><AllVolunteer></AllVolunteer></PrivateRoute>
  }
]);
export default router;
