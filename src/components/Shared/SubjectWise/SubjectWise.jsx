import { Link, useLoaderData } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
const SubjectWise = () => {
    const subjectwise = useLoaderData();
    console.log(subjectwise);
    return (
        <div className="md:pt-3 pt-6">
            {/* Document: {subjectwise.length} */}
            <div className="py-14" style={{ background: 'url(https://i.ibb.co/tJKLWNz/banner-home.webp)' }}>
                <h1 className="flex justify-center text-white text-4xl font-bold font-mono">{subjectwise[0]?.subName || '404 |not found'}</h1>
            </div>
            {
                subjectwise.length > 0 ?
                    <div className="w-11/12 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            subjectwise?.map(content => <div key={content._id} className="w-full bg-white text-black hover:bg-[#D9042B] hover:text-white transition-all border rounded-md">
                                <div className="card-body">
                                    <h2 className="card-title font-bold">{content.topicName}</h2>
                                    <p>{content?.subName}</p>
                                    <p>{content.description}</p>
                                    <p>{content.subCode}</p>
                                    <div className="flex items-center gap-2">
                                        <FcCalendar></FcCalendar>
                                        <p>{content.date}</p>
                                    </div>
                                    <div className="divider"></div>
                                    <p>Author: {content.name}</p>
                                    <Link target="_blank" to={content.driveLink}><button className="border btn-sm rounded bg-[#D9042B] text-white hover:text-black">DriveLink</button></Link>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    :
                <div className="flex flex-col justify-center items-center h-[90vh]">
                    <img className="w-48" src="https://i.ibb.co/Jk4XNhD/image-removebg-preview-1.png" alt="" />
                    <h1 className="text-xl font-semibold font-mono text-[#505050]">No bookmarks added.</h1>
                </div>
            }
        </div>
    );
};

export default SubjectWise;