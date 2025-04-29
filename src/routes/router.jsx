import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../page/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
  ]);
  export default router
  