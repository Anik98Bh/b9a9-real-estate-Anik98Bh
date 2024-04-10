import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('/estates.json')
        },
        {
          path: "/estates/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ()=> fetch('/estates.json')
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/about",
          element: <About></About>
        },
      ],
    },
  ]);

  export default router;