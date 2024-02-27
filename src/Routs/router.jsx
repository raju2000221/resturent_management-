import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MainMenu from "../Pages/MainMenu/MainMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <MainMenu></MainMenu>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "login",
                element:<Login></Login>
            },
            {
                path: "signup",
                element:<Signup></Signup>
            }
      ]
    },
  ]);