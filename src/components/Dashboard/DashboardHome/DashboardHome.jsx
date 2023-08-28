import useAdmin from "../../../hooks/useAdmin";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

const DashboardHome = () => {
    const [isAdmin] = useAdmin();
    
    return (
        <div>
            {isAdmin ? <AdminHome/> : <UserHome/>}
        </div>
    );
};

export default DashboardHome;