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
                    <div className="imgBx"><img src={user?.image ? user?.image : "https://i.ibb.co/2qr381T/user-1.png"} alt=""/></div>
                    <div className="contentBx">
                        <h3>{user?.name}<br/><span>{user?.email}</span></h3>
                    </div>
                </div>
                <ul className="sci" style={{position: "absolute" , display: "flex",  bottom: "50px"}}>
                    <li>
                        <a href="">
                            <img style={{"width": "24px"}} src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img style={{width: "24px"}} src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img style={{width: "24px"}} src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt=""/>
                        </a>
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
