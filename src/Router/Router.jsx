import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
         
      children:[
      {
          path: '/signin',
          element:<SignIn></SignIn>
       },
       {
        path: '/signup',
        element:<SignUp></SignUp>
        
     },

      ]
        },
  
  
  ]);

  export default router;