import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    /* 
    
https://i.ibb.co/D7vQN3f/slide-right.png
https://i.ibb.co/f8SKC0H/slide-left.png
https://i.ibb.co/7VYmTxb/slides-1.png
https://i.ibb.co/JzwDCtt/slides.png
https://i.ibb.co/5Tbc4T9/presentations.png
https://i.ibb.co/wNL2xfZ/sheet.png
https://i.ibb.co/GW0p1hz/office.png
https://i.ibb.co/kH8XvFm/home.png
    
    */
    return (
        <div className="drawer lg:drawer-open bg-blue-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>             
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-6 w-80 h-full bg-[#09212E] space-y-6">
                    {/* Sidebar content here */}
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="/dashboard"><img className="w-10" src="https://i.ibb.co/kH8XvFm/home.png" alt="Home" />Home</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="allusers"><img className="w-10"  src="https://i.ibb.co/GW0p1hz/office.png" alt="" />All Users</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="uploadBooks"><img className="w-10" src="https://i.ibb.co/wNL2xfZ/sheet.png" alt="" />Books</Link></li>
                    <li className="text-[18px] font-mono font-bold"><Link className="text-[#fff] hover:text-white" to="/"><img className="w-10" src="https://i.ibb.co/7VYmTxb/slides-1.png" alt="" />Slides</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;