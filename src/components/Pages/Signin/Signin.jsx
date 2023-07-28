import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import google from '../../../../public/google (1).png'
const Signin = () => {
    return (
        <div className="w-10/12 mx-auto text-center flex justify-center my-10">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                <div className="card-body">
                    <div className="text-center mx-auto border border-[#ffc107] rounded-full">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/c5db8dd4-5695-4497-bf94-d7a300bede0a/n7dYJjzlP3.json"
                            style={{ width: "150px" }}
                        >
                        </lottie-player>
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
                            <span className="">Are you new? Please <Link to="/signup" className="text-[#ffc107]">Sign Up</Link></span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#ffc107] text-[#000] hover:text-[#ffc107] hover:bg-[#000]">Sign In</button>
                    </div>
                    <div className="divider">Or Sign In with </div>
                    <div className="flex justify-center gap-4 align-middle items-center">
                        <img className="w-10" src={google} alt="" />
                        <img className="w-10" src="https://i.ibb.co/5vKgQps/github-1.png" alt="" />
                        <img className="w-10" src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;