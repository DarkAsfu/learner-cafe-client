import { Link } from "react-router-dom";
import useBookmarks from "../../../hooks/useBookmarks";
import { FaEye, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const Bookmarks = () => {
    const [bookmarks, , refetch] = useBookmarks();
    // console.log(bookmarks);
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
                fetch(`http://localhost:5000/bookmarks/${id}`, {
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
        <div className="pt-4 w-11/12 mx-auto">
            {
                bookmarks.length === 0 ?
                    <div className="flex flex-col justify-center items-center h-[90vh]">
                        <img className="w-48" src="https://i.ibb.co/Jk4XNhD/image-removebg-preview-1.png" alt="" />
                        <h1 className="text-xl font-semibold font-mono text-[#505050]">No bookmarks added.</h1>
                    </div> :
                    <div className="pt-20 pb-10 md:pb-10"><h1 className="pb-14 text-center text-2xl uppercase font-sans font-bold">My Bookmarks</h1>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                       {
                            bookmarks.map(bookmark => (
                                <div key={bookmark._id} className="card rounded-md bg-[#e2e2e2] text-black">
                                    <img className="h-[298px] rounded-t-md" src={bookmark?.image} alt="img" />
                                    <div className="flex justify-between px-4 py-8">
                                        <div>
                                        <h2 className="card-title text-black text-2xl font-bold">{bookmark.subName}</h2>
                                        <p className="text-black">{bookmark.topicName}</p>
                                        </div>
                                        <div className="card-actions text-[22px]">
                                            <Link className="bg-white p-2 rounded-md text-[#000]" target="_blank" to={bookmark.driveLink}><FaEye></FaEye></Link>
                                            <button onClick={() => handleDelete(bookmark._id)} className="p-2 rounded-md bg-white text-[#000]"><FaTrash></FaTrash></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                       </div>
                    </div>
            }
        </div>
    );
};

export default Bookmarks;