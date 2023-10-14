import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
const SubjectWise = () => {
    const subjectwise = useLoaderData();
    console.log(subjectwise);
    return (
        <>
        <ScrollToTop/>
        <div className="pt-6 md:pt-0">
            {/* Document: {subjectwise.length} */}
            <div className="py-14" style={{ background: 'url(https://i.ibb.co/tJKLWNz/banner-home.webp)' }}>
                <h1 className="flex justify-center text-[#ffffff74] text-4xl md:text-6xl font-bold uppercase">{subjectwise[0]?.subName || '404 |not found'}</h1>
            </div>
            {
                subjectwise.length > 0 ?
                    <div className="w-11/12 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            subjectwise?.map(document => <Card key={document._id} document={document}></Card>)
                        }
                    </div>
                    :
                <div className="flex flex-col justify-center items-center h-[90vh]">
                    <img className="w-48" src="https://i.ibb.co/Jk4XNhD/image-removebg-preview-1.png" alt="" />
                    <h1 className="text-xl font-semibold font-mono text-[#505050]">No Document</h1>
                </div>
            }
        </div>
        </>
    );
};

export default SubjectWise;