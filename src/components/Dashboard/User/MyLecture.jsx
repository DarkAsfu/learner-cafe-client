import { Link } from "react-router-dom";
import useMyDocument from "../../../hooks/useMyDocument";
import Swal from "sweetalert2";
import useLatestLecture from "../../../hooks/useLatestLecture";
import useAdmin from "../../../hooks/useAdmin";
const MyLecture = () => {
    let [alllectures] = useLatestLecture();
    let [myDocument, loading, refetch] = useMyDocument();
    const [isAdmin] = useAdmin();
    if(isAdmin){
        myDocument = alllectures;
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://learner-cafe-server.vercel.app/lectures/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Document has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
    }
    return (
        <section className="px-2 md:px-10 bg-gray-100 text-gray-600 py-10">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-3">
                        <div className="table-container">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Cover Image</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Subject</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Topic Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Action</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Update</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Delete</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">

                                        {loading ? <tr>
                                            <td colSpan="4" className="">
                                                <img className="flex justify-center" src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif" alt="" />
                                            </td>
                                        </tr> :
                                            myDocument.map(report => (
                                                <tr key={report._id}>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="">
                                                            <img className="h-14" src={report?.image} alt="cover-img" />
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left text-[16px] font-semibold text-black">{report?.subName.slice(0, 10)}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left text-[16px]  text-black">{report?.topicName.slice(0,15)}...</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-[18px] text-center">
                                                            <Link className='text-[14px] text-[#D9042B] bg-[#ffb0b0] font-bold px-3 py-2 rounded-md' target="_blank" to={report?.driveLink}>Download</Link>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex justify-center text-[16px]  text-black">
                                                        <Link to={`/dashboard/update/${report._id}`}><img className="w-10" src="https://i.ibb.co/nw4qsX4/edit-file.png" alt="" /></Link>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex justify-center text-[16px]  text-black">
                                                            <Link onClick={() => handleDelete(report._id)}><img className="w-10" src="https://i.ibb.co/vxqyYxF/trash.png" alt="" /></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyLecture;