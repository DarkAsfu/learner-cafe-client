import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import parse from 'html-react-parser';
const BlogDetails = () => {
    const blog = useLoaderData();
    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen w-11/12 md:w-8/12 mx-auto mb-10">
                <div className="text-center pt-[100px] text-blue-700 break-words">
                    <h1>This blog details page is now underconstruction</h1>
                    <p>Stay With Us. Thank You</p>
                    <h1 className="text-2xl text-black font-bold font-mono pt-10">{blog.title}</h1>
                    <div className="">
                        {parse(blog.content)}
                    </div>
                </div>
            </div>
        </>

    );
};

export default BlogDetails;