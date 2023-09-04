import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="bg-[#fff] shadow-xl fixed top-0 left-0 right-0 z-10">
            <header>
                <div className="relative z-20 md:w-11/12 mx-auto">
                    <div className="py-1 px-6 md:px-0">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                                <Link to="/">
                                    <h1 className="text-[#0D0D0D] text-2xl font-bold uppercase font-mono"><span className="text-[#D9042B]">GUB</span>Material</h1>
                                </Link>
                            </div>

                            <div className="flex items-center justify-end ">
                                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden ">
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                                </label>

                                <div className="bg-[#fff] peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 ">
                                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                        <ul className="pt-32 text-[#0D0D0D] md:pl-14 font-mono font-semibold text-[14px] space-y-8  lg:space-y-0 lg:flex  lg:pt-0 uppercase">
                                            <li>
                                                <Link to='/' className="text-[0D0D0D] hover:bg-[#D9042B] hover:text-[#FFF] px-8 py-3 rounded-md">
                                                    <span className="" >Home</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/explore' className="text-[0D0D0D] hover:bg-[#D9042B] hover:text-[#FFF] px-8 py-3 rounded-md">
                                                    <span className="relative " >Explore</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/contact' className="text-[0D0D0D] hover:bg-[#D9042B] hover:text-[#FFF] px-8 py-3 rounded-md">
                                                    <span className="relative " >All Slide</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/contact' className="text-[0D0D0D] hover:bg-[#D9042B] hover:text-[#FFF] px-8 py-3 rounded-md">
                                                    <span className="relative " >Add Lecture</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/upload" className="text-[0D0D0D] hover:bg-[#D9042B] hover:text-[#FFF] px-8 py-3 rounded-md">
                                                    Upload
                                                </Link>
                                            </li>
                                        </ul>
                                        {
                                            user &&
                                            <div className="dropdown px-7 md:px-20 lg:px-2 -mt-16 md:mt-0">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        {
                                                            user.photoURL ? <img src={user.photoURL} /> : <img src="https://i.ibb.co/2qr381T/user-1.png"></img>
                                                        }
                                                    </div>
                                                </label>
                                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <a className="justify-between">
                                                            Profile
                                                            <span className="badge">New</span>
                                                        </a>
                                                    </li>
                                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                                    <li><button onClick={handleLogOut}>Log Out</button></li>
                                                </ul>
                                            </div>
                                        }
                                        <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:py-0 lg:pr-0 lg:pl-6">
                                            <Link to="/signin" className="block px-4 py-2 rounded bg-[#D9042B] text-white font-bold uppercase">
                                                Login
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
