import parse from 'html-react-parser';
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
    }, [])
    console.log(blogs);
    return (
        <div className="mt-32 w-full px-2 md:w-7/12 mx-auto">
            {
                blogs.map(blog => <div key={blog._id} className="card bg-base-100 rounded-none border gap-4 mb-10 overflow-auto">
                <div className="card-body">
                  {parse(blog.content)}
                </div>
              </div>)
            }
        </div>
    );
};

export default Blogs;