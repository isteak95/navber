import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import MyListPage from "../Pages/MyListPage/MyListPage";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import Home from "../Components/Home/Home";
import Page404 from "../Pages/Page404";
import PrivateRoute from "../PrivateRoute/PrivateRout";

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
          path: '/signin',
          element:<SignIn></SignIn>
       },
       {
        path: '/signup',
        element:<SignUp></SignUp>
        
     },
     {
        path: '/addtouristsspot',
        element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
         
     },
     {
        path: '/AllTouristsSpot',
        element:<AllTouristsSpot></AllTouristsSpot>
     },
     {
        path: '/AllTouristsSpot',
        element:<AllTouristsSpot></AllTouristsSpot>
     },
     {
        path: '/List',
        element:<PrivateRoute><MyListPage></MyListPage></PrivateRoute>
     }, 
      {
        path: '/view-details/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
     },
     {
        path: 'update/:id',
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>
     },
     {
      path:"*",
      element:<Page404></Page404>
     }



      ]
        },
  
  
  ]);

  export default router;