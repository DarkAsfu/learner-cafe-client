import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_ImageUpload_Token;
const UploadForm = () => {
    console.log(img_hosting_token);
    const { user } = useContext(AuthContext);
    // const handleFileChange = (e) => {
    //     const file = e.target.files;
    //     // console.log(file);
    //   };
    const [load, setLoad] = useState(false)
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const handlesubmit = (e) => {
        e.preventDefault();
        setLoad(true)
        const form = e.target;
        const subName = form.subname.value;
        const subCode = form.subcode.value;
        const driveLink = form.drivelink.value;
        const topicName = form.topicname.value;
        const category = form.category.value;
        const description = form.description.value;
        const image = form.coverImg.files;
        const name = user?.displayName;
        const email = user?.email;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const date = today.toLocaleDateString("en-US", options)
        const document = {
            name,
            email,
            subName,
            subCode,
            driveLink,
            topicName,
            category,
            description,
            date,
            image,
        }
        
        const formData = new FormData();
        formData.append('image', document.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const document = { name, email, subName, subCode, driveLink, topicName, category, description, date, image: imgURL };
                    console.log(document);
                    fetch('https://learner-cafe-server.vercel.app/queueDoc', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(document)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                setLoad(false);
                                Swal.fire(
                                    'Thank you!',
                                    'Our team review your doc then it will be live',
                                    'success'
                                )
                                form.reset();
                                
                            }
                        })
                }
            })
    }
    return (
        <div className="bg-[url(https://i.ibb.co/QpzZ6xK/explore-1.jpg)] bg-cover bg-fixed bg-no-repeat bg-[#ffffff] py-20 ">
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
                            <input type="text" placeholder="Enter your topic name" name="topicname" className="input input-bordered w-full" required />
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
                    <div className="form-control w-full max-w-xs mt-4">
                        <label className="label">
                            <span className="label-text capitalize font-mono font-bold text-[16px]">Select Cover Image</span>
                        </label>
                        <input type="file" name="coverImg" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
                    </div>
                    <div className="form-control mt-6">
                       {
                        load  ?
                        <div className="bg-black py-2 text-center rounded-sm"><span className="loading loading-spinner text-secondary"></span></div> : <input className="btn mt-4 text-[#D9042B]  w-full bg-black capitalize" type="submit" value="Add Your lecture" />
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadForm;