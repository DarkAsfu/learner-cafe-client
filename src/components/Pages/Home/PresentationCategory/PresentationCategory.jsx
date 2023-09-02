import usePresentation from "../../../../hooks/usePresentation";
import Card from "../../../Shared/Card/Card";

const PresentationCategory = () => {
    const [presentation] = usePresentation();
    console.log(presentation);
    return (
        <div className="bg-[#fff]">
            <div className="w-11/12 mx-auto py-14">
            <div className="">
            <h1 className="text-[28px] text-[#09212E] font-mono uppercase font-extrabold"><span className="text-[#FFBE30]">Latest</span> Presentation</h1>
            <div className="divider"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
                {
                    presentation.map(document => <Card key={document._id} document={document}></Card>)
                }
            </div>
            </div>
        </div>
    );
};

export default PresentationCategory;