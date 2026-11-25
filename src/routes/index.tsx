import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import SingleProduct from "../pages/SingleProduct";
import PublicGuard from "../AuthGuard/PublicGuard";
import PrivateGuard from "../AuthGuard/PrivateGuard";

export const router = createBrowserRouter([
    {
        element: <PrivateGuard/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]   
    },
    {
        element: <PublicGuard/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]   
    },
    {
        element: <PublicGuard/>,
        children: [
            {
                path: '/register',
                element: <Register/>
            }
        ]   
    },
    {
        element: <PrivateGuard/>,
        children: [
            {
                path: '/cart',
                element: <Cart/>
            }
        ]   
    },
    {
        element: <PrivateGuard/>,
        children: [
            {
                path: '/profile',
                element: <Profile/>
            }
        ]   
    },
    {
        element: <PrivateGuard/>,
        children: [
            {
                path: '/product/:id',
                element: <SingleProduct/>
            }
        ]   
    }
])