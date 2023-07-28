import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import Signin from "../components/Pages/Signin/Signin";
import Signup from "../components/Pages/Signup/Signup";
import Lecture from "../components/Pages/Lecture/Lecture";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/lecture',
                element: <Lecture></Lecture>
            }
        ]
    },
    {
        path: '*',
        element: <h1 className="flex justify-center align-middle mt-48">404 page not found back to <Link className="text-blue-600" to='/'>Home</Link></h1>
    }
]);

export default router