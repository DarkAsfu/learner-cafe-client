import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const BlogDetails = () => {
    const blog = useLoaderData();
    return (
        <>
            <ScrollToTop/>
            <div className="min-h-screen">
                <div className="text-center pt-[200px] text-blue-700">
                    <h1>This blog details page is now underconstruction</h1>
                    <p>Stay With Us. Thank You</p>
                    <h1 className="text-2xl text-black font-bold font-mono pt-10">{blog.title}</h1>
                </div>
            </div>
        </>

    );
};

export default BlogDetails;