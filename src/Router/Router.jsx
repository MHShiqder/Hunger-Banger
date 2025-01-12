import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoutes from "./PrivateRoutes";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/menu",
            element:<Menu></Menu>
        },
        {
            path:"/order/:category",
            element:<PrivateRoutes><Order></Order></PrivateRoutes>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signIn",
            element:<SignIn></SignIn>
        },
      ]
    },
  ]);