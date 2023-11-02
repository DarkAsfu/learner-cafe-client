import useAdmin from "../../../hooks/useAdmin";
import useTitle from "../../../hooks/useTitle";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

const DashboardHome = () => {
    const [isAdmin] = useAdmin();
    useTitle('Dashboard | Learner Cafe')
    return (
        <div>
            {isAdmin ? <AdminHome/> : <UserHome/>}
        </div>
    );
};

export default DashboardHome;