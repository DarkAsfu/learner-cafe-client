import { useState } from "react";
import useLabReport from "../../../../hooks/useLabReport";
import Card from "../../../Shared/Card/Card";

const LabreportCategory = () => {
    const [labreport] = useLabReport();
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }
    const documentShow = show ? labreport : labreport.slice(0, 4);
    return (
        <div className="bg-[#F2F2F2] dark:bg-[#080808]">
            <div className="w-11/12 mx-auto py-14">
                <div className="">
                    <h1 className="text-[28px] text-[#0D0D0D] font-sans  uppercase font-bold  dark:text-white"><span className="text-[#D9042B]">La</span>test labreport</h1>
                    <div className="divider"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
                    {
                        documentShow.map(document => <Card key={document._id} document={document}></Card>)
                    }
                </div>
                <div className="text-center">
                    <button onClick={handleShow} className="border-0 text-[#fff] bg-[#002E3C] px-10 py-3 mt-10 text-center rounded-sm">{show ? 'See Less' : 'View All'}</button>
                </div>
            </div>
        </div>
    );
};

export default LabreportCategory;