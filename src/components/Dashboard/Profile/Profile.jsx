import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="bg-black card mx-10 py-10 md:w-[400px] md:mx-auto mt-36">
                <div className="avatar">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL}/>
                    </div>
                </div>
                <h1 className="text-white text-2xl font-mono text-center my-6">{user?.displayName}</h1>
                <p className="text-white font-sans text-center -mt-5">{user.email}</p>
                <div className="flex justify-center gap-4 mt-3">
                   <img className="w-10" src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt="" />
                   <img className="w-10" src="https://i.ibb.co/3s0dMqy/github-1.png" alt="" />
                   <img className="w-10" src="https://i.ibb.co/3cfcFBW/linkedin.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Profile;