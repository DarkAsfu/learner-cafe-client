import useTitle from '../../../hooks/useTitle';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import './Upload.css'
import UploadForm from './UploadForm';
const Upload = () => {
    useTitle('Upload Document | Learner Cafe');
    return (
        <>
        <ScrollToTop/>
        <div className="hidden z-20 -mt-8 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden  lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[800px] xl:opacity-100"></div>
        <UploadForm/>
        
        </>
    );
};

export default Upload;