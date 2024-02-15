import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import useSingleDocument from "../../../hooks/useSingleDocument";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import RelatedDoc from "./RelatedDoc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Details = () => {
    const { user } = useContext(AuthContext);
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [document, loading, refetch] = useSingleDocument(params.id);
    useTitle(`${document.subName} | Learner Cafe`);
    
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
    const description = document?.description;
    const formatDescription = (str) => {
        const linkRegex = /(https?:\/\/[^\s]+)/g;
        const links = [];
    
        let linkCounter = 1;
        let formattedString = str;
    
        // Replace each link with a placeholder
        formattedString = str.replace(linkRegex, (match, url) => {
          const linkName = `Link ${linkCounter++}`;
          links.push({ name: linkName, url });
          return `%%${links.length - 1}%%`;
        });
    
        // Replace the placeholders with clickable anchor tags
        links.forEach(({ name, url }, index) => {
          const placeholder = `%%${index}%%`;
          const linkTag = `<a style="
          color: blue;" href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`;
          formattedString = formattedString.replace(placeholder, linkTag);
        });
    
        return formattedString;
      };
    
    return (
        <div className="dark:bg-[#080808]">
            <ScrollToTop />
            <div className=" hidden z-20 h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter  lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[800px] xl:opacity-100"></div>
            <div className="w-11/12 md:w-11/12 lg:w-8/12 mx-auto py-20 ">
                <div className="card md:card-side rounded-none bg-base-100 border border-1 dark:border-[#222] p-4 dark:bg-[#181718] dark:text-white">
                    <img className="h-[400px] w-[310px]" src={document.image} alt="cover-img" />
                    <div className="card-body">
                        <h2 className="card-title">{document.subName}</h2>
                        <p>{document.topicName}</p>
                        <hr />
                        {
                            document.description
                            &&  <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: formatDescription(description) }} ></div>
                        }
                        <p><span className="font-semibold">Category:</span> {document.category}</p>
                        <p><span className="font-semibold">Date:</span> {document.date}</p>
                        <p><span className="font-semibold">Name: </span> {document.name}</p>
                        <p><span className="font-semibold">Email:</span> {document.email}</p>
                        <div className="card-actions">{
                            user ? <Link className="btn bg-[#002E3C] text-white hover:text-black border-0" target="_blank" to={document.driveLink}>Read Now</Link> :
                            <button className="btn bg-[#002E3C] text-white hover:text-black" onClick={showToast}>Read Now</button>
                        }
                            
                        </div>
                    </div>
                </div>
                <RelatedDoc category={document.category} />
            </div>
        </div>
    );
};

export default Details;