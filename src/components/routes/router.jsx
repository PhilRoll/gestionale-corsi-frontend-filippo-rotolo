import { Layout } from "../layouts/MainLayout/Layout";
import { Home } from "../pages/Home/Home";
import { Courses } from "../pages/Courses/Courses";
import { NotFound } from "../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

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