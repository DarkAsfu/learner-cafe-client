import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import Signin from "../components/Pages/Signin/Signin";
import Signup from "../components/Pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../components/Dashboard/Admin/AllUsers";
import MyLecture from "../components/Dashboard/User/MyLecture";
import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "./AdminRoute";
import Upload from "../components/Pages/Upload/Upload";
import Explore from "../components/Pages/Explore/Explore";
import UpdateDocument from "../components/Dashboard/User/UpdateDocument";
import Profile from "../components/Dashboard/Profile/Profile";
import Bookmarks from "../components/Pages/Bookmarks/Bookmarks";
import SubjectWise from "../components/Shared/SubjectWise/SubjectWise";
import Books from "../components/Pages/Books/Books";
import UploadBooks from "../components/Dashboard/Admin/UploadBooks";
import Contact from "../components/Pages/Contact/Contact";
import CategoryWise from "../components/Pages/CategoryWise/CategoryWise";
import SetDocStatus from "../components/Dashboard/Admin/setDocStatus";
import Details from "../components/Pages/Details/Details";
import PrivateRouter from "./PrivateRouter";

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
                path: '/explore',
                element: <Explore></Explore>
            },
            {
                path: '/upload',
                element: <PrivateRouter><Upload/></PrivateRouter>
            },
            {
                path: '/bookmarks',
                element: <PrivateRouter><Bookmarks></Bookmarks></PrivateRouter>
            },
            {
                path: '/books',
                element: <Books/>
            },
            {
                path: '/subwise/:id',
                element: <SubjectWise></SubjectWise>,
                loader: ({params}) => fetch(`https://learner-cafe-server.vercel.app/documentSearchBySubName/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/category/:id',
                element: <CategoryWise/>,
                loader: ({params}) => fetch(`https://learner-cafe-server.vercel.app/lectures/category/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <Details/>,
                // loader: ({params}) => fetch(`https://learner-cafe-server.vercel.app/lectures/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome/>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'uploadBooks',
                element: <AdminRoute><UploadBooks/></AdminRoute>
            },
            {
                path: 'setDocSatus',
                element: <AdminRoute><SetDocStatus/></AdminRoute>
            },
            // user
            {
                path: 'mylecture',
                element: <MyLecture></MyLecture>
            },
            {
                path: 'update/:id',
                element: <UpdateDocument/>,
                loader: ({params}) => fetch(`https://learner-cafe-server.vercel.app/lectures/${params.id}`)
            },
            {
                path: 'profile',
                element: <Profile/>,
            }
        ]
    },
    {
        path: '*',
        element: <h1 className="flex justify-center align-middle mt-48">404 page not found back to <Link className="text-blue-600" to='/'>Home</Link></h1>
    }
]);

export default router