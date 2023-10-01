import ContactForm from "./ContactForm";
import Info from "./Info";
import './ContactDetails.css'
const ContactDetails = () => {
    return (
        <div className="bg-[#f2f2f2] py-14">
            <div className="contact-details w-11/12 lg:w-8/12 gap-10 mx-auto flex flex-col md:flex-row lg:flex-row">
                <div className="w-[100%] md:w-[40%]">
                    <Info />
                </div>
                <div className="w-[100%] md:w-[60%]">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;