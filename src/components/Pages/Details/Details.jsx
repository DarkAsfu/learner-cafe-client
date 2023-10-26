import { Link, useParams } from "react-router-dom";
import useSingleDocument from "../../../hooks/useSingleDocument";

const Details = () => {
    // const detailsCard = useLoaderData();
    // console.log(detailsCard);
    const params = useParams();
    console.log(params.id);
    const [document, loading, refetch] = useSingleDocument(params.id);
    console.log(document);
    return (
        <div className="w-11/12 md:w-11/12 lg:w-8/12 mx-auto py-20">
            <div className="card md:card-side rounded-none bg-base-100 border p-4">
                <img className="h-[400px] w-[310px]" src={document.image} alt="cover-img" />
                <div className="card-body">
                    <h2 className="card-title">{document.subName}</h2>
                    <p>{document.topicName}</p>
                    <hr />
                    <p>{document?.description?.slice(0, 150)}.... see more</p>
                    <p><span className="font-semibold">Category:</span> {document.category}</p>
                    <p><span className="font-semibold">Date:</span> {document.date}</p>
                    <p><span className="font-semibold">Name: </span> {document.name}</p>
                    <p><span className="font-semibold">Email:</span> {document.email}</p>
                    <div className="card-actions">
                        <Link to={document.driveLink} className="btn bg-[#002E3C] text-white">Read Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;