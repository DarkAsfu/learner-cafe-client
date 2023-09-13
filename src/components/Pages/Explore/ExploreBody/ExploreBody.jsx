import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ExploreBody.css'
import useLecture from '../../../../hooks/useLecture';
import usePresentation from '../../../../hooks/usePresentation';
// import useLabReport from '../../../../hooks/useLabReport';
// import useSlide from '../../../../hooks/useSlide';
import useLatestLecture from '../../../../hooks/useLatestLecture';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ExploreBody = () => {
    const [lectures] = useLecture();
    const [presentation] = usePresentation();
    // const [labreport] = useLabReport();
    // const [slide] = useSlide();
    const [alllectures, loading, refetch] = useLatestLecture();
    // console.log(alllectures);
    const [alllecture, setAllLectures] = useState([])
    refetch()
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.search.value;
        // setSearchvalue(searchText);
        fetch(`http://localhost:5000/documentSearchByTopicName/${searchText}`)
        .then(res => res.json())
        .then(data => setAllLectures(data))
    }
    let lecture;
    if (alllecture.length == 0) {
        lecture = alllectures;
    } else {
        lecture = alllecture
    }
    return (
        <div className='bg-[#000]'>
            <div className=' mx-auto px-6 md:px-0 py-6 md:py-0' >
                <Tabs className="md:flex">
                    <div className='lg:w-[25%] bg-[#100f0f] text-white md:px-20 md:py-10 text-center px-3'>
                        <TabList className="grid grid-cols-3 md:grid-cols-1 py-2">
                            <Tab className="border-0 mt-3 md:mt-10">All</Tab>
                            <Tab className="border-0 mt-3 md:mt-10">Lecture</Tab>
                            <Tab className="border-0 mt-3 md:mt-10">Presentation</Tab>
                            <Tab className="border-0 mt-3 md:mt-10">Lab Report</Tab>
                            <Tab className="border-0 mt-3 md:mt-10">Slide</Tab>
                        </TabList>
                    </div>
                    <div className='lg:w-[75%]'>
                        <TabPanel>
                            <section className="px-2 md:px-10 bg-gray-100 text-gray-600 py-10">
                                <div className="flex flex-col justify-center h-full">
                                    <form onSubmit={handleSearch} className="input-group flex justify-end">
                                        <input type="text" name="search" placeholder="Search by topic or subject name" className="w-96 input mb-5" />
                                        <button className="btn btn-square bg-[#D9042B] hover:text-[#D9042B] text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </form>
                                    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                        <div className="p-3">
                                            <div className="overflow-x-auto">
                                                <table className="table-auto w-full">
                                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                        <tr>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Author</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Subject</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Topic Name</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-center">Action</div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm divide-y divide-gray-100">

                                                        {loading ? <img src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif" alt="" /> :
                                                            lecture.map(report => (
                                                                <tr key={report._id}>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="">
                                                                            <div className="font-medium text-gray-800">{report?.name}</div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-left text-[16px] font-semibold text-black">{report?.subName}</div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-left text-[16px]  text-black">{report?.topicName}</div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-[18px] text-center">
                                                                            <Link className='text-[14px] text-[#D9042B] bg-[#ffb0b0] font-bold px-3 py-2 rounded-md' to={report?.driveLink}>Download</Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <section className="px-2 md:px-10 bg-gray-100 text-gray-600 py-10">
                                <div className="flex flex-col justify-center h-full">

                                    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                        <div className="p-3">
                                            <div className="overflow-x-auto">
                                                <table className="table-auto w-full">
                                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                        <tr>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Author</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Subject</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Topic Name</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-center">Action</div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm divide-y divide-gray-100">
                                                        {
                                                            lectures.map(report => (
                                                                <tr key={report._id}>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="">
                                                                            <div className="font-medium text-gray-800">{report?.name}</div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-left">{report?.subName}</div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-left font-medium text-green-500">{report?.topicName}</div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-[18px] text-center">
                                                                            <Link className='text-[14px] text-[#D9042B] bg-[#ffb0b0] font-bold px-3 py-2 rounded-md' to={report?.driveLink}>Download</Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <section className="px-2 md:px-10 bg-gray-100 text-gray-600 h-screen">
                                <div className="flex flex-col justify-center h-full">

                                    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                        <div className="p-3">
                                            <div className="overflow-x-auto">
                                                <table className="table-auto w-full">
                                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                        <tr>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Author</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Subject</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-left">Topic Name</div>
                                                            </th>
                                                            <th className="p-2 whitespace-nowrap">
                                                                <div className="font-semibold text-center">Action</div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm divide-y divide-gray-100">
                                                        {
                                                            presentation.map(report => (
                                                                <tr key={report._id}>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="">
                                                                            <div className="font-medium text-gray-800">{report?.name}</div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-left">{report?.subName}</div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-left font-medium text-green-500">{report?.topicName}</div>
                                                                    </td>
                                                                    <td className="p-2 whitespace-nowrap">
                                                                        <div className="text-[18px] text-center">
                                                                            <Link className='text-[14px] text-[#D9042B] bg-[#ffb0b0] font-bold px-3 py-2 rounded-md' to={report?.driveLink}>Download</Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 5</h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ExploreBody;