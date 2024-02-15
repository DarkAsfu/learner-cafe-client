import { Link } from "react-router-dom";
import useBookmarks from "../../../hooks/useBookmarks";
import { FaEye, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import useTitle from "../../../hooks/useTitle";

const Bookmarks = () => {
    useTitle('Bookmark | Learner Cafe');
    const [bookmarks, , refetch] = useBookmarks();
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
                fetch(`https://learner-cafe-server.vercel.app/bookmarks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
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
        <div className="dark:bg-[#080808] min-h-screen">
            <ScrollToTop />
            {
                bookmarks.length === 0 ?
                    <div className="flex flex-col justify-center items-center h-[90vh]">
                        <img className="w-48" src="https://i.ibb.co/Jk4XNhD/image-removebg-preview-1.png" alt="" />
                        <h1 className="text-xl font-semibold font-mono text-[#505050]">No bookmarks added.</h1>
                    </div> :
                    <div className="pt-5 pb-10 md:pb-10">
                        <div className="mt-20 w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {
                                bookmarks.map(bookmark => (
                                    <div key={bookmark._id} className="card rounded-md border dark:border-[#222] shadow-md text-black">
                                        <Link  to={`/details/${bookmark.bookmarkId}`}><img className="h-[200px] w-full md:h-[340px] rounded-t-md" src={bookmark?.image} alt="img" /></Link>
                                        <div className="md:flex justify-between px-2 pt-4 py-14">
                                            <div>
                                                <h2 className="card-title text-black dark:text-white text-[14px] md:text-xl font-bold">{bookmark.subName}</h2>
                                                <p className="text-black dark:text-white">{bookmark.topicName}</p>
                                            </div>
                                            <div className="card-actions text-[16px] absolute bottom-4">
                                                <Link className="bg-[#002E3C] p-2 rounded-md text-[#fff]" target="_blank" to={bookmark.driveLink}><FaEye></FaEye></Link>
                                                <button onClick={() => handleDelete(bookmark._id)} className="p-2 rounded-md bg-[#002E3C] text-[#fff]"><FaTrash></FaTrash></button>
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