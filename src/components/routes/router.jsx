import { Layout } from "../layouts/MainLayout/Layout";
import { Home } from "../pages/Home/Home";
import { Courses } from "../pages/Courses/Courses";
import { NotFound } from "../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { AuthContextProvider } from "../contexts/AuthContext/AuthContextProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { AllUsers } from "../pages/AllUsers/AllUsers";
import { CreateCouse } from "../pages/CreateCourse/CreateCourse";

export const router = createBrowserRouter([
    {
      element: <AuthContextProvider><Layout/></AuthContextProvider>,
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
                },
                {
                  path:"allusers",
                  element: <ProtectedRoute><AllUsers/></ProtectedRoute>
                }
              ]
            },
            {
              path: "/courses/",
              children:[
                {
                  path:"",
                  element: <Courses />
                },
                {
                  path:"create",
                  element: <ProtectedRoute><CreateCouse/></ProtectedRoute>
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