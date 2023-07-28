import { useContext } from 'react';
import google from '../../../../public/google (1).png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
const Social = () => {
    const {googleLogIn, gitHubLoginIn, facebookLogIn} = useContext(AuthContext);
    const handleGoogle = () =>{
        googleLogIn()
        .then(result =>{
            const googleLoggedUser = result.user;
            console.log(googleLoggedUser);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleGithub = () =>{
        gitHubLoginIn()
        .then(result =>{
            const gitLoggedIn = result.user;
            console.log(gitLoggedIn);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleFacebook = () =>{
        facebookLogIn()
        .then(result =>{
            const facebookLogged = result.user;
            console.log(facebookLogged);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="flex justify-center gap-4 align-middle items-center">
            <img onClick={handleGoogle} className="w-10" src={google} alt="" />
            <Link><img onClick={handleGithub} className="w-10" src="https://i.ibb.co/5vKgQps/github-1.png" alt="" /></Link>
            <img onClick={handleFacebook} className="w-10" src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt="" />
        </div>
    );
};

export default Social;