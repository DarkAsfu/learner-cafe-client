import { useContext, useState } from "react";
import { FaBookmark, FaDownload } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useBookmarks from "../../../hooks/useBookmarks";
import { IoCopyOutline } from "react-icons/io5";
const Card = ({ document }) => {
    const { _id, subName, subCode, topicName, name, date, category, description, driveLink, email, image } = document
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [, , refetch] = useBookmarks();

    const showToast = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'You have to log in first to see the document and download'
        })
    }

    const handleBookmark = () => {
        // console.log(document);
        if (user && user?.email) {
            const bookmark = { bookmarkId: _id, subName, image, subCode, topicName, category, description, driveLink, authorName: name, email: user?.email, authorEmail: email };
            fetch('https://learner-cafe-server.vercel.app/bookmarks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookmark)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire(
                            'Welcome!',
                            'Bookmark Added!',
                            'success'
                        )
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                    navigate('/signin')
                }
            })
        }
    }
    const [textToCopy, setTextToCopy] = useState("");
    const handleCopyToClipboard = async (url) => {
        const newTextToCopy = window.location.href + url;
        setTextToCopy(newTextToCopy);
        try {
            await navigator.clipboard.writeText(newTextToCopy);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: false,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "successfully copied to clipboard"
              });
        } catch (err) {
            console.error('Unable to copy text to clipboard', err);
        }
    };
    // http://localhost:5000/lectures/6537e67c6ebeeac8053f6439
    return (
        <div data-aos="fade-up" className="card border border-1 dark:border-[#222] rounded-md shadow-md bg-[#fff] dark:bg-[#181718] dark:text-white">
            <img className="rounded-t-md h-[330px] w-full " src={image} alt="cover img" />
            <div className="px-2 space-y-2">
                <h1 className="text-xl font-bold">{subName}</h1>
                <p className="text-[16px] font-mono font-bold">{topicName}</p>
                <p className="font-semibold text-[14px]">Author: {name}</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center px-2">
                <div>
                    <p className="text-[#09212E] font-mono text-[14px] font-bold mb-4 dark:text-white">{date}</p>
                </div>
                <div className="flex items-center mb-4 gap-3 text-[16px] text-[#D9042B] dark:text-white">
                    <button id="btn" aria-label="Bookmark" onClick={() => handleBookmark()}><FaBookmark></FaBookmark></button>
                    {
                        user ?
                            <Link target="_blank" to={driveLink}><FaDownload></FaDownload></Link>
                            : <Link onClick={showToast} to='/signin'><FaDownload></FaDownload></Link>
                    }
                    <Link to={`/details/${_id}`}><HiInformationCircle></HiInformationCircle></Link>
                    <button onClick={() => handleCopyToClipboard(`details/${_id}`)}>
                        <IoCopyOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;