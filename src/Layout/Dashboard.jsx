import Admin from "../components/Dashboard/Admin/Admin";
import User from "../components/Dashboard/User/User";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    return (
        <div>
            {
                isAdminLoading ? <div className="flex justify-center items-center mt-[25%]"><img src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif" alt="loading" /></div> :
                <div>
                    {
                        isAdmin ? <Admin></Admin> : <User></User>
                    }
                </div>
            }
        </div>
    );
};

export default Dashboard;