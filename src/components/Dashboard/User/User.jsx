import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const User = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="lg:drawer lg:drawer-open bg-[#0E0F13] h-[]">
            <input id="hamburger" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="text-right flex justify-end">
                    <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6  cursor-pointer lg:hidden ">
                        <div aria-hidden="true" className="h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                        <div aria-hidden="true" className=" mt-2 h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                    </label>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="hamburger" className="drawer-overlay"></label>
                <ul className="w-80 h-full bg-[#17181C] text-base-content">
                    {/* Sidebar content here */}
                    <div className="flex items-center justify-around bg-white py-3 border-b-2 border-green-200">
                        <Link to="/">
                            <h1 className="text-[#0D0D0D] text-2xl font-bold uppercase font-mono"><span className="text-[#D9042B]">GUB</span>Material</h1>
                        </Link>
                        {
                            user?.photoURL ? <img className="w-12 rounded-2xl" src={user?.photoURL}></img> : <img className="w-10" src="https://i.ibb.co/2qr381T/user-1.png"></img>
                        }

                    </div>
                    <Link to="/dashboard"><li className="mx-4 px-4 rounded-sm text-[#8C8D8F] font-semibold text-[16px] mt-12 hover:bg-[#8C52FF] hover:text-[#fff] py-3 transition-all duration-300">Home</li></Link>
                    <Link to="mylecture"><li className="mx-4 px-4 rounded-sm text-[#8C8D8F] font-semibold text-[16px] mt-12 hover:bg-[#8C52FF] hover:text-[#fff] py-3 transition-all duration-300">My Lecture</li></Link>
                    <Link to="/"><li className="mx-4 px-4 rounded-sm text-[#8C8D8F] font-semibold text-[16px] mt-12 hover:bg-[#8C52FF] hover:text-[#fff] py-3 transition-all duration-300">My slide</li></Link>
                    <Link to="/upload"><li className="mx-4 px-4 rounded-sm text-[#8C8D8F] font-semibold text-[16px] mt-12 hover:bg-[#8C52FF] hover:text-[#fff] py-3 transition-all duration-300">Add Product</li></Link>
                    <Link to="profile"><li className="mx-4 px-4 rounded-sm text-[#8C8D8F] font-semibold text-[16px] mt-12 hover:bg-[#8C52FF] hover:text-[#fff] py-3 transition-all duration-300">Profile</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default User;