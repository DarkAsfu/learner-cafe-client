import { FaBookmark, FaDownload, FaShare } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Card = ({document}) => {
    console.log(document);
    //https://i.ibb.co/f4mCKRv/cse.png
    //https://i.ibb.co/XWSK64r/EEE-Document.png
    const setImageCSE = document?.subCode?.toLowerCase()?.includes('cse')
    const setImageEEE = document?.subCode?.toLowerCase()?.includes('eee')
    let img;
    if(setImageCSE){
        img = 'https://i.ibb.co/f4mCKRv/cse.png';
    }else if (setImageEEE){
        img= 'https://i.ibb.co/XWSK64r/EEE-Document.png';
    }else{
        img = "https://i.ibb.co/qsdkRbH/pexels-pixabay-261579.jpg"
    }

    return (
        <div className="border rounded-md shadow-md bg-[#fff]">
            <img className="rounded-t-md h-[298px] w-full" src={img} alt="" />
            <div className="px-2 space-y-2">
            <h1 className="text-xl font-bold">{document?.subName}</h1>
            <p className="text-[16px] font-mono font-bold">{document?.topicName}</p>
            <p className="font-semibold text-[14px]">Author: {document?.name}</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between px-2">
            <p className="text-[#09212E] font-mono text-[14px] font-bold mb-4">{document?.date}</p>
            <div className="flex gap-3 text-[18px] text-[#D9042B]">
                <FaBookmark></FaBookmark>
                <Link target="_blank" to={document?.driveLink}><FaDownload></FaDownload></Link>
                <FaShare></FaShare>
            </div>
            </div>
        </div>
    );
};

export default Card;