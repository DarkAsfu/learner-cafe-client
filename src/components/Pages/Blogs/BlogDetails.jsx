import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import parse from 'html-react-parser';
import { GoHeart } from "react-icons/go";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FiArrowUpCircle } from "react-icons/fi";
import { GoShare } from "react-icons/go";
import { BiMessageRounded } from "react-icons/bi";
import { useState, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const BlogDetails = () => {
    const blog = useLoaderData();
    const [reaction, setReaction] = useState(blog.likes || 0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollTop + windowHeight >= windowHeight + 10) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.title = blog.title;

        const metaTags = [
            { property: 'og:title', content: blog.title },
            { property: 'og:description', content: blog.description },
            { property: 'og:coverImage', content: blog.coverImage },
            { property: 'og:url', content: `https://learner-cafe.web.app/blogs/${blog._id}` },
            { property: 'og:type', content: 'article' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: blog.title },
            { name: 'twitter:description', content: blog.description },
            { name: 'twitter:coverImage', content: blog.coverImage },
            { name: 'twitter:url', content: `https://learner-cafe.web.app/blogs/${blog._id}` },
        ];

        metaTags.forEach(tag => {
            let element = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
            if (!element) {
                element = document.createElement('meta');
                document.head.appendChild(element);
            }
            element.setAttribute(tag.property ? 'property' : 'name', tag.property || tag.name);
            element.setAttribute('content', tag.content);
        });
    }, [blog]);

    const handleLike = async () => {
        try {
            const response = await fetch(`https://learner-cafe-server.vercel.app/blogs/${blog._id}/like`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const updatedBlog = await response.json();
                setReaction(updatedBlog.likes);
            } else {
                console.error('Failed to like the blog');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const bottomToTop = () => {
        gsap.to(window, { duration: 1.5, scrollTo: { y: 0, autoKill: false }, ease: "power2.inOut" });
    };

    return (
        <>
            <ScrollToTop />
            <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="min-h-screen w-11/12 md:w-6/12 mx-auto mb-10 scroll-mx-0">
                <div className="mt-20 py-[10px] break-words">
                    <h1 className="text-[32px] md:text-[42px] text-[#242424] font-bold leading-10">{blog.title}</h1>
                    <div className="mt-6 flex gap-3">
                        <div>
                            <img className="w-[44px] rounded-full" src={blog.publisher_img ? blog.publisher_img : "https://i.ibb.co/2qr381T/user-1.png"} alt="" />
                        </div>
                        <div>
                            <h4 className="text-[16px] text-[#000000CCC] font-medium">{blog.publisher_name ? blog.publisher_name : 'Anonymous User'}</h4>
                            <h4 className="text-[12px] text-[#6B6B6B] font-medium">{blog.date}</h4>
                        </div>
                    </div>
                    <div className="mt-10 py-5 border-y flex items-center justify-between">
                        <div className="flex gap-10">
                            <button className="flex items-center gap-1 text-[#686868] text-[17px] font-mono" onClick={handleLike}>
                                <GoHeart />
                                {reaction}
                            </button>
                            <button className="flex items-center gap-1 text-[#686868] text-[17px] font-mono">
                                <BiMessageRounded /> 1
                            </button>
                        </div>
                        <div className="flex gap-8 text-[18px]">
                            <MdOutlineBookmarkAdd />
                            <GoShare />
                        </div>
                    </div>
                    <div className="mt-10">
                        {parse(blog.content)}
                    </div>
                </div>
                {showButton && (
                    <button
                        onClick={bottomToTop}
                        className="fixed top-[90vh] right-2 md:right-72 text-[36px] transition-transform duration-300 text-[#D9042B]"
                    >
                        <FiArrowUpCircle />
                    </button>
                )}
            </div>
        </>
    );
};

export default BlogDetails;
