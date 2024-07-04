import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [resetSuccess, setResetSuccess] = useState('')
    const [resetError, setResetError] = useState('')
    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.resetEmail.value;
        resetPassword(email)
            .then(() => {
                setResetSuccess('Password reset email sent');
                setResetError('');
            })
            .catch(error => {
                console.log(error.message);
                setResetError(error.message);
                setResetSuccess('')
            });
    };
    return (
        <>
            <div className="fixed top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="min-h-screen w-10/12 md:w-6/12 lg:w-4/12 mx-auto pt-48">
                <h1 className="text-2xl md:text-4xl font-bold text-[#373737]">Enter you email</h1>
                <form onSubmit={handleResetPassword}>
                    <input
                        type="email"
                        placeholder="Enter the email address"
                        name="resetEmail"
                        className="input input-bordered w-full my-4"
                        required
                    />
                    <button type="submit" className="btn bg-blue-500 text-white btn-sm hover:bg-blue-700">Send</button>
                </form>
                <p className="text-[16px] font-semibold text-red-400">{resetError}</p>
                <p className="text-[16px] font-semibold text-green-400">{resetSuccess}</p>
            </div>
        </>
    );
};

export default ResetPassword;