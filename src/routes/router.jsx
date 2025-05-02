import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "./PrivateRoute";


import BeAVolunteer from "../pages/BeAVolunteer";
import VolunteerDetails from "../pages/VolunteerDetails";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts";
import ManageMyPosts from "../pages/ManageMyPosts";
import Update from "../pages/Update";

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
    path: 'volunteer-details',
    element: <PrivateRoute><VolunteerDetails></VolunteerDetails></PrivateRoute>
  },
  {
    path: '/beAVolunteer/:id',
    element: <BeAVolunteer></BeAVolunteer>
  },
  {
    path: 'all-volunteer-need-posts',
    element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>
  },
  {
    path: 'manage-my-posts',
    element:<PrivateRoute><ManageMyPosts></ManageMyPosts></PrivateRoute>
  },
  {
    path: '/update/:id',
    element: <PrivateRoute><Update></Update></PrivateRoute>
  }
]);
export default router;
