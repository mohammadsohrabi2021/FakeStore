import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/about-us/AboutUs";
import Concat from "../pages/Concat/Concat";
import Categories from "../pages/categories/Categories";
import Layout from "../components/layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "Concat",
        element: <Concat />,
      },
      {
        path: "categories/:categoryID",
        element: <Categories />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Layout2 />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
]);

export default router;
