import { Link, Outlet } from "react-router-dom";

const Admin = () => {

    return (
        <div className="drawer lg:drawer-open bg-[#161623]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-6 w-80 h-full bg-[#09212E] space-y-6">
                    {/* Sidebar content here */}
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="/dashboard"><img className="w-10" src="https://i.ibb.co/kH8XvFm/home.png" alt="Home" />Home</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="allusers"><img className="w-10" src="https://i.ibb.co/GW0p1hz/office.png" alt="" />All Users</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="uploadBooks"><img className="w-10" src="https://i.ibb.co/jb4hXTs/open-book.png" alt="" />Books</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="setDocSatus"><img className="w-10" src="https://i.ibb.co/JRZLJKj/google-2.png" alt="" />Queue Docs</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="mylecture"><img className="w-10" src="https://i.ibb.co/z5WtrbR/lectern.png" alt="" />All Lecture</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="profile"><img className="w-10" src="https://i.ibb.co/2qr381T/user-1.png" alt="" />Profile</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="/"><img className="w-10 rotate-180" src="https://i.ibb.co/jzqvjc4/right-arrow.png" alt="" />Back To Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;