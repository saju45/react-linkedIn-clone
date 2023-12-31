import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layout/HomeLayout";
import ProfileLayout from "../layout/ProfileLayout";
import ConnectionLayout from "../layout/ConnnectionLayout";

 export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomeLayout/>,
  },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
     {
      path: "/profile",
      element: <ProfileLayout/>,
    },
    {
      path: "/connection",
      element: <ConnectionLayout/>,
    },

  ]);