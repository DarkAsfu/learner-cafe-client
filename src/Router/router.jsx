import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import Signin from "../components/Pages/Signin/Signin";
import Signup from "../components/Pages/Signup/Signup";
import Lecture from "../components/Pages/Lecture/Lecture";
import Dashboard from "../Layout/Dashboard";
import PrivateRouter from "./privateRouter";
import AllUsers from "../components/Dashboard/Admin/AllUsers";
import MyLecture from "../components/Dashboard/User/MyLecture";
const isAdmin = 1;
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
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: isAdmin ? <h1> Dashboard Home </h1> : <h1>Dashboard Home j</h1>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers> 
            },
            // user
            {
                path: 'mylecture',
                element: <MyLecture></MyLecture>
            }
        ]
    },
    {
        path: '*',
        element: <h1 className="flex justify-center align-middle mt-48">404 page not found back to <Link className="text-blue-600" to='/'>Home</Link></h1>
    }
]);

export default router