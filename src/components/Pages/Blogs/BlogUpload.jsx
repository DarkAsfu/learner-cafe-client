import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import parse from 'html-react-parser';

const BlogUpload = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    console.log(content);
    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: 'Start typing...',
        direction: 'ltr' // Ensure direction is set to 'ltr' if not using RTL
    }), []);

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
            <div className="mt-4 w-11/12 md:w-8/12 mx-auto">
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => setContent(newContent)}
                />
            </div>
            <div className="mt-4 text-white">
                {parse(content)}
            </div>
        </>
    );
};

export default BlogUpload;
