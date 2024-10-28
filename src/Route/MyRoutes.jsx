import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const MyRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:([
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },

        ])
    },

]) 


export default MyRoutes;