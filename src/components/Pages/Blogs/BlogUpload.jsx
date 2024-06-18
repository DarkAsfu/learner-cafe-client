import { useState, useRef, useMemo, useContext } from 'react';
import JoditEditor from 'jodit-react';
import Swal from "sweetalert2";
import moment from 'moment/moment';
import { AuthContext } from '../../../Provider/AuthProvider';

const BlogUpload = () => {
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [content, setContent] = useState('');
    const { user } = useContext(AuthContext);
    const [buttonLoading, setButtonLoading] = useState(false);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...',
        direction: 'ltr'
    }), []);

    console.log(user);

    const blog = {
        title,
        coverImage,
        content,
        date: moment().format('llll'),
        publisher_name: user?.displayName,
        publisher_img: user?.photoURL,
    }

    const blogUpload = () => {
        if (!title || !coverImage || !content) {
            Swal.fire(
                'Error',
                'All fields are required',
                'error'
            );
            return;
        }

        setButtonLoading(true);

        fetch('https://learner-cafe-server.vercel.app/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Thank you!',
                    'Successfully posted your blog',
                    'success'
                );
                setButtonLoading(false);
            })
            .catch(e => {
                console.log(e.message);
                Swal.fire(
                    'Error',
                    'There was an error posting your blog',
                    'error'
                );
                setButtonLoading(false);
            });
    };

    return (
        <>
            <style>{`
            svg {
                transform: none !important;
            }
            `}</style>
            <div className="text-center text-white text-4xl mt-10 font-bold capitalize">
                Write your blog
            </div>
            <div className="mt-4 w-11/12 md:w-10/12 mx-auto bg-[#f2f2f2] p-2 md:p-10 rounded-md mb-10">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-md font-semibold">Blog Title</span>
                    </div>
                    <input type="text" required onChange={e => setTitle(e.target.value)} placeholder="Write your blog title" name="title" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full mb-4">
                    <div className="label">
                        <span className="label-text text-md font-semibold">Image link</span>
                    </div>
                    <input type="text" required onChange={e => setCoverImage(e.target.value)} placeholder="Insert blog cover image link" name="cover-image" className="input input-bordered w-full" />
                </label>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => setContent(newContent)}
                />
                <button
                    className={`text-white bg-green-500 px-10 py-4 text-center mt-4 rounded-md flex gap-2 ${buttonLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={blogUpload}
                    disabled={buttonLoading}
                >
                    <span className={`loading loading-spinner ${buttonLoading ? 'block' : 'hidden'}`}></span>
                    Upload
                </button>
            </div>
        </>
    );
};

export default BlogUpload;
