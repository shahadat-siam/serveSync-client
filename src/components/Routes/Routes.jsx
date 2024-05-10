import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../Home/Home";
import ErrorPage from "../LayOut/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
