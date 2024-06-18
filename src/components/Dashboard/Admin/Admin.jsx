import { Link, Outlet } from "react-router-dom";
import { PiArticle } from "react-icons/pi";
import { IoHomeOutline, IoDocumentsOutline, IoBookOutline, IoChevronBack } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdQueue } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Admin = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open bg-[#00000f]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="">
                <div className="text-right flex justify-end">
                    <label htmlFor="my-drawer-2" className="peer-checked:hamburger block relative z-20 p-6  cursor-pointer lg:hidden ">
                        <div aria-hidden="true" className="h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                        <div aria-hidden="true" className=" mt-2 h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                    </label>
                </div>
                </label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="p-6 w-60 md:w-72 h-full bg-[#002E3C] space-y-4 md:space-y-8 pt-4">
                    {/* Sidebar content here */}
                    <div className="flex items-center justify-around py-3 border-[#f2f2f2] border-b-2">
                        <Link to="/">
                            <h1 className="text-[#D9042B] text-2xl md:text-3xl font-bold font-mono"><span className="text-[#fff]">Learner</span>Cafe</h1>
                        </Link>
                        {
                            user?.photoURL ? <Link to="profile"><img className="w-10 md:w-12 rounded-2xl" src={user?.photoURL}></img></Link> : <Link to="profile"><img className="w-10" src="https://i.ibb.co/2qr381T/user-1.png"></img></Link>
                        }

                    </div>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="/dashboard"><IoHomeOutline className="font-white text-3xl md:text-4xl" />Home</Link></li>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="allusers"><FaUsers className="font-white text-3xl md:text-4xl" />All Users</Link></li>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="uploadBooks"><IoBookOutline className="font-white text-3xl md:text-4xl" /> Books</Link></li>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="setDocSatus"><MdQueue className="font-white text-3xl md:text-4xl" /> Queue Docs</Link></li>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="mylecture"><IoDocumentsOutline className="font-white rotate-1 text-3xl md:text-4xl" />All Lecture</Link></li>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="profile"><CgProfile className="font-white text-3xl md:text-4xl" />Profile</Link></li>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="blogs"><PiArticle className="font-white text-3xl md:text-4xl" /> Blogs</Link></li>
                    <li className="text-[14px] md:text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-blue-500 transition-all flex items-center gap-4" to="/"><IoChevronBack className="font-white text-3xl md:text-4xl rotate-1"/> Back To Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;