import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import MyReview from "../Pages/MyReview/MyReview";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddService from "../Pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import UpdateReveiw from "../Pages/MyReview/UpdateReveiw";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main> </Main>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/services",
        element: <Services> </Services>,
      },
      {
        path: "/login",
        element: <LogIn> </LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/review",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://roofsie-server.vercel.app/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`https://roofsie-server.vercel.app/review/${params.id}`),
        element: <UpdateReveiw></UpdateReveiw>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
