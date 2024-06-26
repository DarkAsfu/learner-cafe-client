import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";
import Loading from "../components/Shared/Loading/Loading";
const Main = () => {
    return (
        <>
            <Loading />
            <div className="">
                <div className="mb-12">
                    <NavBar></NavBar>
                </div>
                <Outlet></Outlet>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </>

    );
};

export default Main;