import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Social from "../../Shared/Social/Social";
const Signup = () => {
    const {user, createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    console.log(user, createUser);
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, email, password});
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess('Succesfully registered please login')
            setError('')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
            setSuccess('')
        })
    }
    return (
        <div className="w-10/12 mx-auto text-center flex justify-center my-10">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                <div className="card-body">
                    <div className="text-center mx-auto border border-[#ffc107] rounded-full">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/dc3cedd5-7b78-477c-96c6-0231fbadbf79/2gZGhCexHB.json"
                            style={{ width: "150px" }}
                        >
                        </lottie-player>
                    </div>
                    <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name"
                        required 
                        name="name"
                        className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                        required
                        name="email"
                        className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                        required 
                        name="password"
                        className="input input-bordered" />
                        <label className="label">
                            <span className="">Already have an account? Please <Link to="/signin" className="text-[#ffc107]">Sign In</Link></span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#ffc107] text-[#000] hover:text-[#ffc107] hover:bg-[#000]">Sign Up</button>
                    </div>
                    </form>
                    <div className="divider">Or Sign In with </div>
                    <Social></Social>
                    <p className="text-green-600">{success}</p>
                    <p className="text-red-500">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Signup;