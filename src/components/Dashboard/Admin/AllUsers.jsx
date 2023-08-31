import useUsers from "../../../hooks/useUsers";

const AllUsers = () => {
    const [users, loading] = useUsers();
    return (
        <div className="mb-10 px-3">
            <h1 className="md:text-3xl text-xl font-extrabold text-center text-purple-700 capitalize mt-10">{users.length} users in this website.</h1>
            {
                loading ? <img className="ml-[47%] mt-10" src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif"></img> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 mt-10">
                {
                    users.map(user => (
                        <div key={user._id} className="relative bg-white py-6 px-6 rounded-3xl md:w-64 my-4 shadow-xl">
                            <div className=" text-white flex items-center absolute rounded-full p-1 shadow-xl bg-[#FFBE30] left-4 -top-6">
                                <img className="w-14 rounded-full" src={user?.image ? user?.image : "https://i.ibb.co/2qr381T/user-1.png"} alt="" />
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">{user?.name}</p>
                                <div className="flex space-x-2 text-gray-400 text-sm">
                                    <p>{user?.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            }
        </div>
    );
};

export default AllUsers;
