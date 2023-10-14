import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import './Upload.css'
import UploadForm from './UploadForm';
const Upload = () => {
    return (
        <>
        {/* <div className="pt-1 upload-banner">
            <div className='w-11/12 mx-auto text-center pt-[12%] md:pt-[5%]'>
            <h1 className='text-black font-serif font-bold uppercase text-2xl md:text-4xl'>Upload your document</h1>
            <p className='text-[#fff] font-bold font-mono text-sm md:text-xl'>Make sure your upload your document google drive fast then share the link </p>
            </div>
        </div> */}
        <ScrollToTop/>
        <UploadForm/>
        </>
    );
};

export default Upload;