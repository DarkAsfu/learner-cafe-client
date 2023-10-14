import ContactDetails from "./ContactDetails";
import Map from "./Map";

const Contact = () => {
    return (
        <div>
            <div className="bg-[url(https://i.ibb.co/pwBSCJS/kaleb-tapp-J59w-WPn09-BE-unsplash-1.jpg)]  h-[200px] bg-center bg-cover">
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