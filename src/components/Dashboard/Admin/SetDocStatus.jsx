import { Link } from "react-router-dom";
import useQueueDoc from "../../../hooks/useQueueDoc";
import Swal from "sweetalert2";

const SetDocStatus = () => {
    const [queueDoc, loading, refetch] = useQueueDoc();
    const handleApprove = (doc) => {
        // console.log(doc);
        const {
            name,
            email,
            subName,
            subCode,
            driveLink,
            topicName,
            category,
            description,
            date,
            image
        } = doc
        const addDoc = {
            name,
            email,
            subName,
            subCode,
            driveLink,
            topicName,
            category,
            description,
            date,
            image
        }
        fetch('https://learner-cafe-server.vercel.app/lectures', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addDoc)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Thank you!',
                        'Document Approve Now',
                        'success'
                    )
                    fetch(`https://learner-cafe-server.vercel.app/queueDoc/${doc._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            refetch();
                        })
                }
            })
    }
    return (
        <section className="px-2 md:px-10 bg-gray-100 text-gray-600 py-10">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-3">
                        <div className="table-container">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Cover Image</div>
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
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Accept</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Rejected</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">

                                        {loading ? <tr>
                                            <td colSpan="4" className="">
                                                <img className="flex justify-center" src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif" alt="" />
                                            </td>
                                        </tr> :
                                            queueDoc.map(report => (
                                                <tr key={report._id}>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="">
                                                            <img className="h-14" src={report?.image} alt="cover-img" />
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
                                                            <Link className='text-[14px] text-[#D9042B] bg-[#ffb0b0] font-bold px-3 py-2 rounded-md' target="_blank" to={report?.driveLink}>Download</Link>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex justify-center text-[16px]  text-black">
                                                            <button onClick={() => handleApprove(report)} className="bg-[#00d300] text-[#017101] px-2 py-1.5 font-bold rounded-md">Approve</button>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex justify-center text-[16px]  text-black">
                                                            <button className="text-[#b40b0b] bg-[#ff000096] px-2 py-1.5 font-bold rounded-md">Decline</button>
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
            </div>
        </section>
    );
};

export default SetDocStatus;