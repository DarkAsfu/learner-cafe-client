import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaBookmark } from "react-icons/fa6";
import useBookmarks from "../../../hooks/useBookmarks";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [bookmarks, loading, refetch] = useBookmarks();
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const toogleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="bg-[#fff]  shadow-xl fixed top-0 left-0 right-0 z-10 ">
            <header>
                <div className="relative z-20 md:w-11/12 mx-auto">
                    <div className="py-2 px-6 md:px-0">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                                <Link to="/">
                                    <h1 className="text-[#0D0D0D]  text-2xl font-bold uppercase font-mono"><span className="text-[#D9042B]">GUB</span>Material</h1>
                                </Link>
                            </div>

                            <div className="flex items-center justify-end ">
                                <div className="flex-none gap-3 md:hidden">
                                    <label className="cursor-pointer grid place-items-center">
                                        <input type="checkbox" onClick={toogleDarkMode} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 border-2 w-14 h-8 border-[#002E3C]" style={{ background: '#002E3C' }} />
                                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    </label>
                                </div>
                                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden ">
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-[#D9042B] transition duration-300"></div>
                                </label>
                                <div className="bg-[#fff] peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 ">
                                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                        <ul className="lg:flex items-center pt-32 text-[#0D0D0D] px-5 font-mono font-semibold text-[14px] space-y-4  lg:space-y-0 lg:pt-0 uppercase">
                                            <li>
                                                <Link to='/' className="text-[0D0D0D]  hover:bg-[#D9042B]  hover:text-[#FFF] px-6 py-3 rounded-md">
                                                    <span className="" >Home</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/explore' className="text-[0D0D0D]  hover:bg-[#D9042B]  hover:text-[#FFF] px-6 py-3 rounded-md">
                                                    <span className="relative " >Explore</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/books' className="text-[0D0D0D]  hover:bg-[#D9042B]  hover:text-[#FFF] px-6 py-3 rounded-md">
                                                    <span className="relative " >Books</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/contact' className="text-[0D0D0D]  hover:bg-[#D9042B]  hover:text-[#FFF] px-6 py-3 rounded-md">
                                                    <span className="relative " >Contact</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/upload" className="text-[0D0D0D]  hover:bg-[#D9042B]  hover:text-[#FFF] px-6 py-3 rounded-md">
                                                    Upload
                                                </Link>
                                            </li>
                                            {
                                                user &&
                                                <div className="grid grid-cols-1 lg:grid-cols-2 px-6">
                                                    <div className="md:dropdown">
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                                            <div className="w-10 rounded-full">
                                                                {
                                                                    user.photoURL ? <img src={user.photoURL} /> : <img src="https://i.ibb.co/2qr381T/user-1.png"></img>
                                                                }
                                                            </div>
                                                        </label>
                                                        <ul tabIndex={0} className="menu menu-sm dropdown-content my-1 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                                            <li><Link to="/dashboard">Dashboard</Link></li>
                                                            <li><button onClick={handleLogOut}>Log Out</button></li>
                                                        </ul>
                                                    </div>
                                                    <div className="dropdown border rounded-full max-w-max">
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-[#D9042B] dark:bg-[#f8f8f8] hover:text-white dark:hover:text-[#2E1619]">
                                                            <div className="indicator">
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                                                                <FaBookmark className="text-[18px]"></FaBookmark>
                                                                <span className="badge badge-sm indicator-item">{bookmarks.length}</span>
                                                            </div>
                                                        </label>
                                                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                                            <div className="card-body">
                                                                <span className="font-bold text-lg">{bookmarks.length} Document</span>
                                                                <div className="card-actions">
                                                                    <Link to='/bookmarks'><button className="btn-sm rounded-md bg-[#000] text-white btn-block">View Bookmarks</button></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </ul>
                                        <div className="flex-none gap-3 hidden md:block">
                                            <label className="cursor-pointer grid place-items-center">
                                                <input type="checkbox" onClick={toogleDarkMode} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 border-2 w-14 h-8 border-[#002E3C]" style={{ background: '#002E3C' }} />
                                                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                            </label>
                                        </div>
                                        <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:py-0 lg:pr-0 lg:pl-6 flex place-items-center gap-3">
                                            <Link to="/signin" className="w-full text-[12px] font-bold px-4 py-2 rounded bg-[#D9042B] text-white uppercase">
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
