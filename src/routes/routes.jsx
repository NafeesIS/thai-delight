import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Footer from "../pages/Shared/Footer/Footer";
import SignUp from "../pages/SignUp/SignUp";
import ChefDetails from "../pages/Home/Home/ChefDetails/ChefDetails";
import NotFound from "../pages/NotFound/NotFound";
import Blog from "../pages/Blogs/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`https://thai-delight-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    },

]);

export default router;