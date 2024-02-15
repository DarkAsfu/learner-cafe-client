import { useState } from "react";
import useLatestLecture from "../../../../hooks/useLatestLecture";
import Card from "../../../Shared/Card/Card";

const LatestLecture = () => {
    const [alllectures] = useLatestLecture()
    // console.log(lectures[1]?.subCode?.toLowerCase()?.includes('cs'));
    const [show, setShow] = useState(false);
    const handleShow = () =>{
        setShow(!show)
    }
    const documentShow = show ? alllectures : alllectures.slice(0, 4);
    return (
        <div className="dark:bg-[#080808]">
            <div className="w-11/12 mx-auto py-14">
            <div className="">
            <h1 className="text-[28px] text-[#0D0D0D]  dark:text-white font-sans  uppercase font-bold"><span className="text-[#D9042B]">La</span>test Documents</h1>
            <div className="divider"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
                {
                    documentShow.map(document => <Card key={document._id} document={document}></Card>)
                }
            </div>
            <div className="text-center">
            <button onClick={handleShow} className="border-0 text-[#fff] bg-[#002E3C] px-10 py-3 mt-10 text-center rounded-sm">{show ? 'See Less' : 'View All' }</button>
            </div>
            </div>
        </div>
    );
};

export default LatestLecture;