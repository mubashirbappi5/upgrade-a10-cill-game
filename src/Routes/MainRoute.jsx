import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddReview from "../Pages/AddReview";
import AllReview from "../Pages/AllReview";
import ReviewDetails from "../Pages/ReviewDetails";
import MyReview from "../Pages/MyReview";
import UpdateReview from "../Pages/updateReview";
import MyWatchlist from "../Pages/MyWatchlist";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Support from "../Pages/Support";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Error/>,
    children:[{
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>

    },
    {
      path:'/register',
      element:<Register/>

  },
  {
    path:'/addReview',
    element:<PrivateRoute><AddReview/></PrivateRoute>
  },
  {
    path:'/reviews',
    element:<AllReview/>,
    loader:()=> fetch("https://cill-gamer-server.vercel.app/gamer")
  },
  {
    path:'/review/:id',
    element:<ReviewDetails/>,
    loader:({params})=> fetch(`https://cill-gamer-server.vercel.app/gamer/${params.id}`)
  },
  {
    path:'/myReviews',
    element:<PrivateRoute><MyReview/></PrivateRoute>,
    
  },
  {
    path:'/updateReview/:id',
    element:<PrivateRoute><UpdateReview/></PrivateRoute>,
    loader:({params})=>fetch(`https://cill-gamer-server.vercel.app/gamer/${params.id}`)
  },
  {
    path:'/myWatchlist',
    element:<PrivateRoute><MyWatchlist/></PrivateRoute>,
   

  },
  {
    path:'/about',
    element:<About/>
   

  },
  {
    path:'/contact',
    element:<Contact/>
   

  },
  {
    path:'/Support',
    element:<Support/>
   

  }

]

  },
  
]);

export default MainRoute;
