import { createBrowserRouter } from "react-router-dom";
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
]);

export default router