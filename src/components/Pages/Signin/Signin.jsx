import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useState } from "react";
import Social from "../../Shared/Social/Social";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
const Signin = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const signIn = result.user;
            console.log(signIn);
            setError('')
            setSuccess('Successfully login !!!')
            form.reset();
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
            setSuccess('')
        })
    }

    return (
        <>
        <ScrollToTop/>
        <div className="w-10/12 mx-auto text-center flex justify-center mb-10 mt-24">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                <div className="card-body">
                    <div className="text-center mx-auto border border-[#D9042B] rounded-full">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/c5db8dd4-5695-4497-bf94-d7a300bede0a/n7dYJjzlP3.json"
                            style={{ width: "150px" }}
                        >
                        </lottie-player>
                    </div>
                    <form onSubmit={handleSignIn}>
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
                                <span className="">Are you new user? Please <Link to="/signup" className="text-[#D9042B]">Sign Up</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D9042B] text-[#fff] hover:text-[#D9042B] hover:bg-[#000]">Sign In</button>
                        </div>
                    </form>
                    <div className="divider">Or Sign In with </div>
                    <Social/>
                    <p>{success}</p>
                    <p>{error}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signin;