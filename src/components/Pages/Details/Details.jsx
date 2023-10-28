import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import useSingleDocument from "../../../hooks/useSingleDocument";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import RelatedDoc from "./RelatedDoc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const { user } = useContext(AuthContext);
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [document, loading, refetch] = useSingleDocument(params.id);

    useEffect(() => {
        refetch(params.id);
    }, [params.id, refetch]);

    if (loading) {
        return <p>Loading...</p>;
    }
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
        backToLocation();
    }
    const backToLocation = () => {
        if (!user) {
            // Use navigate instead of history.push
            navigate('/signin', { state: { from: location } });
            // or use Navigate component
            // return <Navigate to='/signin' state={{ from: location }} replace />;
        }
    }

    return (
        <>
            <ScrollToTop />
            <div className="mt-24 hidden z-20 h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[800px] xl:opacity-100"></div>
            <div className="w-11/12 md:w-11/12 lg:w-8/12 mx-auto py-20">
                <div className="card md:card-side rounded-none bg-base-100 border p-4">
                    <img className="h-[400px] w-[310px]" src={document.image} alt="cover-img" />
                    <div className="card-body">
                        <h2 className="card-title">{document.subName}</h2>
                        <p>{document.topicName}</p>
                        <hr />
                        {
                            document.description
                            && <p>{document?.description?.slice(0, 150)}.... see more</p>
                        }
                        <p><span className="font-semibold">Category:</span> {document.category}</p>
                        <p><span className="font-semibold">Date:</span> {document.date}</p>
                        <p><span className="font-semibold">Name: </span> {document.name}</p>
                        <p><span className="font-semibold">Email:</span> {document.email}</p>
                        <div className="card-actions">{
                            user ? <Link className="btn bg-[#002E3C] text-white" target="_blank" to={document.driveLink}>Read Now</Link> :
                            <button onClick={showToast}>Read Now</button>
                        }
                            
                        </div>
                    </div>
                </div>
                <RelatedDoc category={document.category} />
            </div>
        </>
    );
};

export default Details;