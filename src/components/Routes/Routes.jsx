import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../Home/Home";
import ErrorPage from "../LayOut/ErrorPage";
import AddVolunteer from "../pages/AddVolunteer";  
import PrivateRoutes from "./PrivateRoutes";
import NeedVolunteer from "../pages/NeedVolunteer";
import ViewDetails from "../pages/ViewDetails";
import BeAVolunteer from "../pages/BeAVolunteer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/> ,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/volunteer`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <SignUp />,
      },
      {
        path:'/add-volunteer',
        element:  <PrivateRoutes><AddVolunteer/></PrivateRoutes>
      },
      {
        path: '/need-volunteer-page',
        element: <NeedVolunteer/>
      },
      {
        path: '/view-details/:id',
        element:  <PrivateRoutes><ViewDetails/></PrivateRoutes>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
      },
      {
        path: '/be-a-volunteer/:id',
        element:  <PrivateRoutes><BeAVolunteer/></PrivateRoutes>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
      }
    ],
  },
]);
export default router;
