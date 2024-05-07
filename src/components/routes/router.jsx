import { Layout } from "../layouts/MainLayout/Layout";
import { Home } from "../pages/Home/Home";
import { Courses } from "../pages/Courses/Courses";
import { NotFound } from "../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";
import { UserProfile } from "../pages/UserProfile/UserProfile";

export const router = createBrowserRouter([
    {
      element: <Layout/>,
      children:[
        {
          path: "/",
          children: [
            {
              path: "",
              element: <Home />
            },
            {
              path: "/login",
              element: <Login />
            },
            {
              path:"/register",
              element: <Registration/>
            },
            {
              path:"/user",
              children:[
                {
                  path:"profile",
                  element: <UserProfile/>
                }
              ]
            },
            {
              path: "/courses/",
              children:[
                {
                  path:"",
                  element: <Courses />
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);