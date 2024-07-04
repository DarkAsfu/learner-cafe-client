import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const Blogs = () => {
    document.title = "Blog | Learner Cafe";
    const [blogs, setBlogs] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        setFilteredBlogs(
            blogs.filter(blog =>
                (blog.title && blog.title.toLowerCase().includes(value)) ||
                (blog.publisher_name && blog.publisher_name.toLowerCase().includes(value))
            )
        );
    };

    useEffect(() => {
        fetch('https://learner-cafe-server.vercel.app/blogs')
            .then(res => res.json())
            .then(blogs => {
                setBlogs(blogs);
                setFilteredBlogs(blogs);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (searchText === '') {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(
                blogs.filter(blog =>
                    (blog.title && blog.title.toLowerCase().includes(searchText)) ||
                    (blog.publisher_name && blog.publisher_name.toLowerCase().includes(searchText))
                )
            );
        }
    }, [searchText, blogs]);

    return (
        <>
            <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>
            <div className="fixed h-full -z-20 w-full bg-slate-950 dark:block hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
            </div>
            <div className='min-h-screen'>
                <ScrollToTop />
                <div className="text-center text-3xl md:text-5xl font-bold pt-20 flex flex-col dark:text-white">
                    Explore Topics
                    <form className="mt-7">
                        <input
                            type="text"
                            placeholder="Search all topics"
                            name="searchBlog"
                            value={searchText}
                            onChange={handleSearch}
                            className="input input-bordered input-accent bg-[#F9F9F9] border-white font-sans rounded-full md:py-[30px] placeholder-[#686868] pr-20 md:pr-96"
                        />
                    </form>
                </div>

                <div className="pt-14 pb-14 w-10/12 md:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 hover">
                    {loading ? (
                        <div className="col-span-full text-center">
                            <img src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif" alt="Loading" />
                        </div>
                    ) : filteredBlogs.length > 0 ? (
                        filteredBlogs.map(blog => (
                            <div key={blog._id} className="border p-2 card shadow-md overflow-auto flex flex-col bg-[#F8F9FA] relative group transition-all">
                                <div className="img rounded-full flex justify-between">
                                    <img className='rounded-full w-8' src={blog.publisher_img ? blog.publisher_img : "https://i.ibb.co/2qr381T/user-1.png"} alt="" />
                                    <Link to={blog._id} className="btn bg-black text-white  btn-sm capitalize hover:drop-shadow-lg hover:shadow-black hover:bg-black hidden group-hover:flex items-center transition-all" type="button">Read Post <LuExternalLink className="rotate-1 text-lg" /></Link>
                                </div>
                                <h3 className='text-[20px] leading-7 font-bold text-[#0E1217]'>{blog?.title}</h3>
                                <p className='text-[#525866] text-[13px] leading-[18px] mb-1'>{blog.date}</p>
                                <img className='rounded-lg my-2 mt-auto md:h-[150px]' src={blog.coverImage} alt="" />
                                <div className='flex justify-between items-center p-2 mt-auto'>
                                <Link>
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 p-1 hover:bg-[#39e58c41] hover:text-[#39e58c] rounded-md transition-all"><path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z" fill="currentcolor" fillRule="evenodd"></path></svg>
                                    </Link>
                                    <Link>
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 p-1 hover:bg-[#2cdde655] hover:text-[#2cdce6] rounded-md transition-all"><path d="M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031zm7.666 1.491a33.948 33.948 0 00-6.752-.075l-.748.075-.28.031c-.915.102-1.481.297-1.97.606a3.016 3.016 0 00-1.116 1.247c-.228.468-.357.989-.38 1.76l-.004.266v3.563c0 .577.134 1.116.375 1.587.242.471.592.874 1.024 1.18.37.263.801.453 1.276.554l.242.043 1.98.283c.339.048.457.096.575.175.119.078.262.187.27.386l-.002.024-.013.08-.164.741-.064.333c-.111.63-.167 1.332.09 1.634.263.309.7.39 1.037.187l.089-.062 2.998-3.135.13-.101.092-.063.077-.04.08-.03.035-.01.087-.02L17 15.545a2.993 2.993 0 002.495-2.77l.005-.182V8.618c0-.921-.13-1.506-.384-2.026A3.016 3.016 0 0018 5.345c-.44-.278-.943-.464-1.706-.572l-.265-.034-.279-.03zm-.55 6.294l.093.005c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005c-.398-.044-.707-.36-.707-.745 0-.38.301-.694.691-.744l.109-.007h6.4zm0-3.5l.093.004c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005C8.309 8.953 8 8.637 8 8.252c0-.38.301-.694.691-.744l.109-.007h6.4z" fill="currentcolor" fillRule="evenodd"></path></svg>
                                    </Link>
                                    <Link>
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 p-1 hover:bg-[#ff7a2b52] hover:text-[#fa6620] rounded-md transition-all"><path d="M15.874 3H8.126a3.357 3.357 0 00-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 003.128-1.7l-.771-12.767A3.358 3.358 0 0015.874 3zm0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 01-.74.402l-5.207-3.848a.929.929 0 00-1.104 0L6.24 19.414a.464.464 0 01-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744h7.748z" fill="currentcolor" fillRule="evenodd"></path></svg>
                                    </Link>
                                    <Link>
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 p-1 hover:bg-[#c029f052] hover:text-[#ac1de4] rounded-md transition-all"><path d="M13.2 4.096a3.743 3.743 0 015.148-.137l.144.137 1.412 1.412a3.743 3.743 0 01.137 5.148l-.137.144-4.023 4.023a3.743 3.743 0 01-5.148.137l-.144-.137-.706-.706a.749.749 0 01.982-1.125l.076.067.706.705c.84.84 2.181.876 3.063.105l.113-.105 4.022-4.022c.84-.84.876-2.181.105-3.064l-.105-.112-1.411-1.411a2.246 2.246 0 00-3.063-.105l-.113.105L13.2 6.213a.749.749 0 01-1.126-.982l.067-.076L13.2 4.096zM8.119 9.177a3.743 3.743 0 015.148-.137l.144.137.706.706a.749.749 0 01-.982 1.125l-.076-.067-.706-.705a2.246 2.246 0 00-3.063-.105l-.113.105-4.022 4.022a2.246 2.246 0 00-.105 3.064l.105.112 1.411 1.411c.84.84 2.181.876 3.063.105l.113-.105 1.058-1.058a.749.749 0 011.126.982l-.067.076-1.059 1.059a3.743 3.743 0 01-5.148.137l-.144-.137-1.412-1.412a3.743 3.743 0 01-.137-5.148l.137-.144L8.12 9.177z" fill="currentcolor" fillRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center">
                            <p className="text-xl text-gray-600">No blogs found</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Blogs;
