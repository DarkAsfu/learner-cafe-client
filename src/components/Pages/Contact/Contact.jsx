import useTitle from "../../../hooks/useTitle";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import ContactDetails from "./ContactDetails";
import Map from "./Map";

const Contact = () => {
    useTitle('Contact | Learner Cafe');
    return (
        <div>
            <ScrollToTop/>
            <div className="bg-[#002E3C]  h-[200px] bg-center bg-cover z-50">
                <div>
                    <h1 className="text-center text-[#ffffff84] uppercase font-extrabold text-4xl md:text-6xl flex justify-center pt-24 md:pt-20">Contact Us</h1>
                </div>
            </div>
            <ContactDetails/>
            <Map/>
        </div>
    );
};

export default Contact;