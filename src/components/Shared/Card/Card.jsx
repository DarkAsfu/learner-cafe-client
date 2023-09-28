import { useContext } from "react";
import { FaBookmark, FaDownload, FaShare } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useBookmarks from "../../../hooks/useBookmarks";
const Card = ({document}) => {
    // console.log(document);
    const {_id, subName, subCode, topicName, name, date, category, description, driveLink, email, image} = document
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [, , refetch] = useBookmarks();
    // console.log(bookmarks);
    // const setImageCSE = document?.subCode?.toLowerCase()?.includes('cse')
    // const setImageEEE = document?.subCode?.toLowerCase()?.includes('eee')
    // let img;
    // if(setImageCSE){
    //     img = 'https://i.ibb.co/f4mCKRv/cse.png';
    // }else if (setImageEEE){
    //     img= 'https://i.ibb.co/XWSK64r/EEE-Document.png';
    // }else{
    //     img = "https://i.ibb.co/qsdkRbH/pexels-pixabay-261579.jpg"
    // }
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
    
    //http://localhost:5000/mybookmarks?email=md.ashrafulislam4566@gmail.com
    const handleBookmark = () =>{
        // console.log(document);
        if(user && user?.email){
            const bookmark = {bookmarkId: _id, subName, image, subCode, topicName, category, description, driveLink, authorName:name, email: user?.email, authorEmail: email};
            console.log(bookmark);
            fetch('http://localhost:5000/bookmarks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookmark)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire(
                        'Welcome!',
                        'Bookmark Added!',
                        'success'
                      )
                    refetch();
                }
            })
        }
        else{
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
    return (
        <div className="border rounded-md shadow-md bg-[#fff]">
            <img className="rounded-t-md h-[298px] w-full" src={image} alt="cover img" />
            <div className="px-2 space-y-2">
            <h1 className="text-xl font-bold">{subName}</h1>
            <p className="text-[16px] font-mono font-bold">{topicName}</p>
            <p className="font-semibold text-[14px]">Author: {name}</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between px-2">
            <p className="text-[#09212E] font-mono text-[14px] font-bold mb-4">{date}</p>
            <div className="flex gap-3 text-[18px] text-[#D9042B] items-center">
                <button onClick={() => handleBookmark()}><FaBookmark></FaBookmark></button>
                {
                    user ?
                    <Link target="_blank" to={driveLink}><FaDownload></FaDownload></Link>
                    : <Link onClick={showToast}  to='/signin'><FaDownload></FaDownload></Link>
                }
                <FaShare></FaShare>
            </div>
            </div>
        </div>
    );
};

export default Card;