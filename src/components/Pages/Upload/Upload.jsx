import useTitle from '../../../hooks/useTitle';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import './Upload.css'
import UploadForm from './UploadForm';
const Upload = () => {
    useTitle('Upload Document | Learner Cafe');
    return (
        <>
        <ScrollToTop/>
        <UploadForm/>
        </>
    );
};

export default Upload;