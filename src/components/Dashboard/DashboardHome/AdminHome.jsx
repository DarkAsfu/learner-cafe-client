// import useMonthlyUser from '../../../hooks/useMonthlyUser';
import useUsers from '../../../hooks/useUsers';
import DocPicChart from './DocPicChart';

const AdminHome = () => {
    // const [monthlyUser, loading, refetch] = useMonthlyUser();
    const [users] = useUsers();
    return (
        <div className="text-white">
            <div className='grid md:grid-cols-2 gap-3 md:gap-10 p-4 md:p-10'>
                <div className='border h-[50vh] rounded-xl bg-[#787878] py-6'>
                <h1 className="text-3xl font-bold text-center">Statistic of Document</h1>
                    <div className='transform scale-x-[-1]'>
                    <DocPicChart/>
                    </div>
                    
                </div>
                <div className='border h-[50vh] rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus facere harum assumenda voluptatem! temporibus. Quos error reprehendeo totam sint. Ab harum enim hic suscipit, magni quibusdam! Quos numquam libero voluptate pariatur deleniti quaerat.</div>
                <div className='border h-[50vh] rounded-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora doloribus minus ullam, voluptate nobis nulla? Voluptates tempore velit vero? Fugit id, alias molestiae modi facilis nisi, ipsa doloribus atque quae magnam maxime ratione ipsum tenetur saepe laborum possimus! Consequatur dignissimos praesentium similique dicta officiis maiores excepturi facilis velit magnam accusantium quibusdam ducimus ale qui.</div>
                <div className='md:h-[50vh] bg-[#002E3C] border-4 border-[#00546F] p-2 mb-10 md:0 md:p-6  overflow-x-auto overflow-y-auto rounded-md '>
                    <div className="">
                        <table className="table-auto border-separate">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-white '>Name</th>
                                    <th className='text-white '>Email</th>
                                    {/* <th>Date</th> */}
                                </tr>
                            </thead>
                            <tbody className=''>
                                {/* row 1 */}
                                {
                                    users.slice(0, 4).map(user =>
                                        <tr key={user._id} className=''>
                                            <td className='pt-5'>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={user?.image ? user?.image : "https://i.ibb.co/2qr381T/user-1.png"} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{user?.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='pl-8 pt-5'>{user?.email}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;