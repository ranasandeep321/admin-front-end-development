import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import ProductsPage from '../screens/products/ProductsPage';
import NewProduct from '../screens/addProduct/NewProduct';
import DashboardLayout from "../Layout/DashboardLayout";
import Users from "../screens/users/Users";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/users',
                element: <Users></Users>
            },
            {
           
                path: '/products',
                element: <ProductsPage></ProductsPage>
            },{
                path: '/users',
                element: <Users></Users>
            },
            {
                path: '/products/add-product',
                element: <NewProduct></NewProduct>
            }
        ],
    },
    {
        path: '/login',
        element: <Login></Login>
    }

])