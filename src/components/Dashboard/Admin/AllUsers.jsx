import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import './style/alluser.css'
const AllUsers = () => {
    const [users] = useUsers();
    return (
        <section>
            <div className="container">
                {
                    users.map(user => (
                        <div className="card" key={user._id}>
                            <div className="content">
                                <div className="imgBx"><img src={user?.image ? user?.image : "https://i.ibb.co/2qr381T/user-1.png"} alt="" /></div>
                                <div className="contentBx">
                                    <h3>{user?.name}<br /><span>{user?.email}</span></h3>
                                </div>
                            </div>
                            <ul className="sci" style={{ position: "absolute", display: "flex", bottom: "50px" }}>
                                <li>
                                    {user?.facebook ?
                                        <a href={`https://www.facebook.com/${user?.facebook}`} target="blank" className="text-[24px] text-white">
                                            < FaFacebookF className="rotate-0" />
                                        </a> :
                                        <div className="text-[24px] text-white">
                                            < FaFacebookF className="rotate-0" />
                                        </div>
                                    }
                                </li>
                                <li>
                                    {user?.github ?
                                        <a href={`https://github.com/${user?.github}`} target="blank" className="text-[24px] text-white">
                                            <FaGithub className="rotate-0" />
                                        </a> :
                                        <div className="text-[24px] text-white">
                                            <FaGithub className="rotate-0" />
                                        </div>
                                    }
                                </li>
                                <li>
                                    {user?.linkedin ?
                                        <a href={`https://linkedin.com/in/${user?.linkedin}`} target="blank" className="text-[24px] text-white">
                                            <FaLinkedin className="rotate-0" />
                                        </a> :
                                        <div className="text-[24px] text-white">
                                            <FaLinkedin className="rotate-0" />
                                        </div>
                                    }
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default AllUsers;
