import "@lottiefiles/lottie-player";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Social from "../../Shared/Social/Social";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import useTitle from "../../../hooks/useTitle";
const Signup = () => {
    useTitle('SignUp | Learner Cafe');
    const {createUser, updateInfo} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const date = today.toLocaleDateString("en-US", options)
        // console.log({name, email, password, date});
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            
            updateInfo(name);
            const saveUser = {name, email: loggedUser.email, image: loggedUser.photoURL, date};
            fetch('https://learner-cafe-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })
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
                            <span className="">Already have an account? Please <Link to="/signin" className="text-[#D9042B]">Sign In</Link></span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D9042B] text-[#fff] hover:text-[#D9042B] hover:bg-[#000]">Sign Up</button>
                    </div>
                    </form>
                    <div className="divider">Or Sign In with </div>
                    <Social></Social>
                    <p className="text-green-600">{success}</p>
                    <p className="text-red-500">{error}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signup;