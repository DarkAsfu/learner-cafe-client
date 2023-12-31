import { useContext } from 'react';
import google from '../../../../public/google (1).png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Social = () => {
    const { googleLogIn, gitHubLoginIn, facebookLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    console.log(from);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const date = today.toLocaleDateString("en-US", options)
    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                const googleLoggedUser = result.user;
                const saveUser = { name: googleLoggedUser.displayName, email: googleLoggedUser.email, image: googleLoggedUser.photoURL, date };
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
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGithub = () => {
        gitHubLoginIn()
            .then(result => {
                const gitLoggedIn = result.user;
                const saveUser = { name: gitLoggedIn.displayName, email: gitLoggedIn.email, image: gitLoggedIn.photoURL, date };
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
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleFacebook = () => {
        facebookLogIn()
            .then(result => {
                const facebookLogged = result.user;
                const saveUser = { name: facebookLogged.displayName, email: facebookLogged.email, image: facebookLogged.photoURL, date };
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
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex justify-center gap-4 align-middle items-center">
            <Link><img onClick={handleGoogle} className="w-10" src={google} alt="" /></Link>
            <Link><img onClick={handleGithub} className="w-10" src="https://i.ibb.co/5vKgQps/github-1.png" alt="" /></Link>
            <Link><img onClick={handleFacebook} className="w-10" src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt="" /></Link>
        </div>
    );
};

export default Social;