import Admin from "../components/Dashboard/Admin/Admin";
import User from "../components/Dashboard/User/User";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const isAdmin = 1;
    const isAdmin = useAdmin();
    const admin = isAdmin[0];
    return (
        <div>
            {
                admin ? <Admin></Admin> : <User></User>
            }
        </div>
    );
};

export default Dashboard;