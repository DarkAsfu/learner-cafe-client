import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const RelatedDoc = ({ category }) => {
    const params = useParams();
    const [loading, setLoading] = useState(true);

    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories', category, params.id],
        queryFn: async () => {
            if (!params.id) {
                setLoading(false);
                return [];
            }

            const res = await fetch(`https://learner-cafe-server.vercel.app/lectures/category/${category}`);
            setLoading(false);
            return res.json();
        },
    });

    useEffect(() => {
        refetch(category, params.id);
    }, [category, params.id, refetch]);

    const relatedDoc = categories.filter(c => c._id !== params.id);

    return (
        <div>
            {loading ? (
                <img className="w-36" src="https://i.ibb.co/brR61WV/airplane.gif" alt="Loading" />
            ) : (
                <div>
                    <h1 className="text-[28px] text-[#0D0D0D] font-sans uppercase font-bold mt-10">
                        <span className="text-[#D9042B]">Related</span> Documents
                    </h1>
                    <div className="divider"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {relatedDoc.map(document => (
                            <div key={document._id}>
                                <Link to={`/details/${document._id}`} className="">
                                    <div className="border py-2 h-[260px]">
                                        <img className='h-[200px] w-[150px]' src={document.image} alt="" />
                                        <h3 className="text-black text-[14px] font-semibold px-2 my-2">{document.subName}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RelatedDoc;
