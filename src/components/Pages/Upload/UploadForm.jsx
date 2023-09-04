import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const UploadForm = () => {
    const { user } = useContext(AuthContext)
    const handlesubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const subname = form.subname.value;
        const subcode = form.subcode.value;
        const drivelink = form.drivelink.value;
        const topicname = form.topicname.value;
        const category = form.category.value;
        const description = form.description.value;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const date = today.toLocaleDateString("en-US", options)
        const document = {
            name: user.displayName,
            email: user?.email,
            subName: subname,
            subCode: subcode,
            driveLink: drivelink,
            topicName: topicname,
            category,
            description,
            date
        }
        console.log(document);
        fetch('http://localhost:5000/lectures', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(document)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Thank you!',
                    'Your document is now added',
                    'success'
                  )
                  form.reset();
            }
        })
    }
    return (
        <div className="bg-[url(https://i.ibb.co/syp2dX5/explore.jpg)] bg-cover bg-fixed bg-no-repeat bg-[#ffffff] py-20 ">
            <div className="md:w-8/12 lg:w-6/12 md:mx-auto py-10 my-20 bg-white md:px-10 px-6 shadow-md rounded-md mx-3">
                <h1 className="text-[#D9042B] text-2xl font-bold">Upload Your Lecture</h1>
                <form onSubmit={handlesubmit}>
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px]">subject name</span>
                            </label>
                            <input type="text" placeholder="Enter your subject name" name="subname" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px]">subject code</span>
                            </label>
                            <input type="text" placeholder="Enter this subject code" name="subcode" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text capitalize font-mono font-bold text-[16px]">Document drive link</span>
                        </label>
                        <input type="text" placeholder="Paste google drive link" name="drivelink" className="input input-bordered w-full" required />
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px] ">Topic name</span>
                            </label>
                            <input type="text" placeholder="Enter your topic name" name="topicname" className="input input-bordered w-full" required/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px]">Select your category</span>
                            </label>
                            <select className="select select-bordered" defaultValue="lecture" name="category" required>
                                <option value="lecture">Select One</option>
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
                        <textarea placeholder="Write about your topic" className="textarea textarea-bordered textarea-md w-full" name="description" ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn mt-4 bg-[#09212E] text-[#fff] hover:bg-[#D9042B] hover:text-[#fff] w-full capitalize" type="submit" value="Add Your lecture" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadForm;