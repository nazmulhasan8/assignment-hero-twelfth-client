import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllSellers from "../../Pages/Dashboard/AllUsers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageProducts from "../../Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedProduct from "../../Pages/Dashboard/ReportedProduct/ReportedProduct";
import AllAdvertise from "../../Pages/Home/Categories/AllAdvertise";
import AllCategories from "../../Pages/Home/Categories/AllCategories";
import AllProducts from "../../Pages/Home/Categories/AllProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
            {
                    path:'/', 
                    element:  <PrivateRoute><AllCategories></AllCategories></PrivateRoute>
                  },
                  {
                  path:'/', 
                  element:<PrivateRoute><AllAdvertise></AllAdvertise> </PrivateRoute> 
                },
                  {
                    path: '/blog',
                    element: <Blog></Blog>
                },      
           
            {
                path: '/:id',
                element:<PrivateRoute><AllProducts></AllProducts></PrivateRoute> ,
                loader: ({params}) => fetch(`https://assignment-hero-twelfth-server.vercel.app/allProducts/${params.id}`)
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
           
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <AdminRoute><ReportedProduct></ReportedProduct></AdminRoute>
            },
            
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/manageproducts',
                element: <SellerRoute><ManageProducts></ManageProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element:<PrivateRoute> <Payment></Payment></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-hero-twelfth-server.vercel.app/bookingsProduct/${params.id}`)
            },
        ]
    }
])

export default router;