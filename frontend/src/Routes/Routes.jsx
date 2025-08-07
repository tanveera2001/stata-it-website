import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Hotel from "../Pages/Hotel/Hotel";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
      },
        {
          path:'/home-automation',
          element:<Hotel></Hotel>
      },
        {
          path:'/#Support',
          element:<Hotel></Hotel>
      },
      ]
    },
  ]);
  export default router;
  