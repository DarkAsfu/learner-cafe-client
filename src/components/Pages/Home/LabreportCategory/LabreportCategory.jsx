import useLabReport from "../../../../hooks/useLabReport";
import Card from "../../../Shared/Card/Card";

const LabreportCategory = () => {
    const [labreport] = useLabReport();
    return (
        <div className="bg-[#F2F2F2]">
            <div className="w-11/12 mx-auto py-14">
            <div className="">
            <h1 className="text-[28px] text-[#0D0D0D] font-sans  uppercase font-bold"><span className="text-[#D9042B]">La</span>test labreport</h1>
            <div className="divider"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
                {
                    labreport.map(document => <Card key={document._id} document={document}></Card>)
                }
            </div>
            </div>
        </div>
    );
};

export default LabreportCategory;