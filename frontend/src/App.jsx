import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';



const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><Home/></>
  },
   {
    path: "blogs",
    element:<><Navbar/><Blogs/></>
  },
   {
    path: "about",
    element:<><Navbar/><About/></>
  },
   {
    path: "login",
    element:<><Navbar/><Login/></>
  },
   {
    path: "signup",
    element:<><Navbar/><Signup/></>
  },
])

const App = () => {
  return (
   <>
   
   <RouterProvider router={router}/>
   
   
   </>
  );
};

export default App;
