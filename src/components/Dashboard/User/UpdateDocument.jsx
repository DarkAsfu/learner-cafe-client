import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDocument = () => {
    const document = useLoaderData();
    const navigate = useNavigate()
    const handleUpdateDocument = (e) =>{
        e.preventDefault();
        const form = e.target;
        const subName = form.subname.value;
        const subCode = form.subcode.value;
        const driveLink = form.drivelink.value;
        const topicName = form.topicname.value;
        const category = form.category.value;
        const description = form.description.value;
        const updatedDoc = {
            subName,
            subCode,
            driveLink,
            topicName,
            category,
            description,
        }

        fetch(`https://learner-cafe-server.vercel.app/lectures/${document._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedDoc) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good job!',
                    'Document updated successfully',
                    'success'
                )
                form.reset();
                navigate('/dashboard/mylecture'); 
            }
        })
    }
    return (
        <div className="bg-[url(https://i.ibb.co/syp2dX5/explore.jpg)] bg-cover bg-fixed bg-no-repeat bg-[#ffffff] py-20 ">
            <div className="md:w-8/12 lg:w-6/12 md:mx-auto py-10 my-20 bg-white md:px-10 px-6 shadow-md rounded-md mx-3">
                <h1 className="text-[#D9042B] text-2xl font-bold">Update Your Document</h1>
                <form onSubmit={handleUpdateDocument}>
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px]">subject name</span>
                            </label>
                            <input type="text" placeholder="Enter your subject name" name="subname" defaultValue={document.subName} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px]">subject code</span>
                            </label>
                            <input type="text" placeholder="Enter this subject code" name="subcode" defaultValue={document.subCode} className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text capitalize font-mono font-bold text-[16px]">Document drive link</span>
                        </label>
                        <input type="text" placeholder="Paste google drive link" name="drivelink" defaultValue={document.driveLink} className="input input-bordered w-full" required />
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px] ">Topic name</span>
                            </label>
                            <input type="text" placeholder="Enter your topic name" name="topicname" defaultValue={document.topicName} className="input input-bordered w-full" required/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px]">Select your category</span>
                            </label>
                            <select className="select select-bordered" defaultValue={document.category} name="category" required>
                                <option>Select One</option>
                                <option value="lecture">Lecture</option>
                                <option value="presentation">Presentation</option>
                                <option value="suggestion">Suggestion</option>
                                <option value="labreport">Lab Report</option>
                                <option value="slide">Slide</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text capitalize font-mono font-bold text-[16px]">Description</span>
                        </label>
                        <textarea placeholder="Write about your topic" defaultValue={document.description} className="textarea textarea-bordered textarea-md w-full" name="description" ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn mt-4 bg-[#09212E] text-[#fff] hover:bg-[#D9042B] hover:text-[#fff] w-full capitalize" type="submit" value="Update Your Document" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDocument;