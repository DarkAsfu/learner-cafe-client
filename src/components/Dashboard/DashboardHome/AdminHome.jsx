import useMonthlyUser from '../../../hooks/useMonthlyUser';

const AdminHome = () => {
    const [monthlyUser, loading, refetch] = useMonthlyUser();

    return (
        <div className="">
            <h1>Admin Home Test</h1>

        </div>
    );
};

export default AdminHome;