import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="allusers">All Users</Link></li>
                    <li><Link to="/">Lecture</Link></li>
                    <li><Link to="/">Slides</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;