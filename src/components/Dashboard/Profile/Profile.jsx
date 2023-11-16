import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import '../Admin/style/alluser.css'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import useUsers from "../../../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Profile = () => {
    const { user } = useContext(AuthContext);
    const [users] = useUsers();
    const navigate = useNavigate();
    const data = users.find(singleUser => user.email == singleUser.email);
    console.log(data);
    const handleSave = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const github = form.github.value;
        const facebook = form.facebook.value;
        const linkedin = form.linkedin.value;
        const userUpdatedInfo = { name, github, facebook, linkedin };
        fetch(`https://learner-cafe-server.vercel.app/user/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userUpdatedInfo)
        })
        .then(res => res.json())
        .then( data => {
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good job!',
                    'Your profile updated successfully',
                    'success'
                )
                form.reset();
                navigate('/dashboard/profile'); 
                const modal = document.getElementById('my_modal_5');
                if (modal) {
                    modal.close();
                }
            }
        })
    }

    return (
        <section className="pb-60">
            <div className="container">
                <div className="card" >
                    <button><BiSolidEdit onClick={() => document.getElementById('my_modal_5').showModal()} className="relative bottom-12 left-28 text-white text-[30px]" /></button>
                    {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle -z-10">
                        <div className="modal-box px-10">
                            <h1 className="text-2xl font-bold text-center py-4">Edit you information</h1>
                            <form onSubmit={handleSave}>
                                <input name="name" type="text" placeholder="your name" defaultValue={data?.name} className="input input-bordered w-full mt-2" />
                                <input name="email" type="email" placeholder="your email" defaultValue={data?.email} readOnly className="input input-bordered w-full mt-2" />
                                <input name="github" type="text" placeholder="Enter github user name" defaultValue={data?.github} className="input input-bordered w-full mt-2" />
                                <input name="facebook" type="text" placeholder="Enter facebook user name" defaultValue={data?.facebook} className="input input-bordered w-full mt-2" />
                                <input name="linkedin" type="text" placeholder="Enter linkedin user name" defaultValue={data?.linkedin} className="input input-bordered w-full mt-2" />
                                <button className="btn mt-3 px-8 py-4 bg-black hover:bg-[#302e2e] text-white">Save</button>
                            </form>

                            <div className="modal-action -mt-12">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn bg-red-700 hover:bg-red-900 text-white">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <div className="content">
                        <div className="imgBx"><img src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/2qr381T/user-1.png"} alt="" /></div>
                        <div className="contentBx">
                            <h3>{user?.displayName}<br /><span>{user?.email}</span></h3>
                        </div>
                    </div>
                    <ul className="sci" style={{ position: "absolute", display: "flex", bottom: "50px" }}>
                        <li>
                            <a href={`https://www.facebook.com/${data?.facebook}`} target="blank" className="text-[24px] text-white">
                                < FaFacebookF className="rotate-0" />
                            </a>
                        </li>
                        <li>
                            <a href={`https://github.com/${data?.github}`} target="blank" className="text-[24px] text-white">
                                <FaGithub className="rotate-0" />
                            </a>
                        </li>
                        <li>
                            <a href={`https://linkedin.com/in/${data?.linkedin}`} target="blank" className="text-[24px] text-white">
                                <FaLinkedin className="rotate-0" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Profile;