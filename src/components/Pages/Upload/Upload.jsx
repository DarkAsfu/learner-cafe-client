import { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import './Upload.css'
import UploadForm from './UploadForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UploadBooks from '../../Dashboard/Admin/UploadBooks';

const Upload = () => {
    useTitle('Upload Document | Learner Cafe');
    const [activeTab, setActiveTab] = useState(0);

    // Add a click handler to remove focus
    const handleClickOutsideTab = () => {
        setActiveTab(-1);
    };
    return (
        <>
            <ScrollToTop />
            <div onClick={handleClickOutsideTab}  className="hidden z-20 -mt-8 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden  lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[800px] xl:opacity-100"></div>

            <Tabs className="bg-[#2f2f2f] pt-20 pb-2 md:py-20 text-center text-white" selectedIndex={activeTab}
                onSelect={(index) => setActiveTab(index)}>
                <TabList className="border-0">
                    <Tab className="custom-tab">Upload Document</Tab>
                    <Tab className="custom-tab">Upload Book</Tab>
                </TabList>

                <TabPanel>
                    <UploadForm />
                </TabPanel>
                <TabPanel>
                    <UploadBooks/>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Upload;