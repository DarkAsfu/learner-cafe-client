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
            <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:hidden"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>

            <div className="fixed -z-20 h-full w-full bg-black hidden dark:block"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
            <Tabs className="pt-20 pb-2 md:py-20 text-center text-white" selectedIndex={activeTab}
                onSelect={(index) => setActiveTab(index)}>
                <TabList className="bg-[#f2f2f2] max-w-max mx-auto rounded-full p-1">
                    <Tab className="custom-tab bg-[#686868] rounded-full mr-1">Upload Document</Tab>
                    <Tab className="custom-tab bg-[#686868] rounded-full">Upload Book</Tab>
                </TabList>

                <TabPanel>
                    <UploadForm />
                </TabPanel>
                <TabPanel>
                    <UploadBooks />
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Upload;