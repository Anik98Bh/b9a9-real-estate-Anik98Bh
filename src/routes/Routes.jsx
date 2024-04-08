import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/details",
          element: <Details></Details>
        },
        {
          path: "/about",
          element: <Home></Home>
        },
      ],
    },
  ]);

  export default router;