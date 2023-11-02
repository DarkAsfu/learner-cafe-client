import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationPin } from "react-icons/md";
const Info = () => {
    const contactDetails = [
        {   
            id: 1,
            icon: <FaPhone></FaPhone>,
            title: "Phone Number",
            info: "+8801777112564"
        },
        {   
            id: 2,
            icon: <MdEmail></MdEmail>,
            title: "Email Address",
            info: "gubmaterial@gmail.com"
        },
        {
            id: 3,
            icon: <MdLocationPin></MdLocationPin>,
            title: "Location",
            info: "Purbachal, Green University"
        }

    ]
    return (
        <div>
            <div>
                {
                    contactDetails.map(details => <div className="bg-white mb-6 gap-4 px-5 py-6 flex items-center rounded-md" key={details.id}>
                        <div className="text-[24px] bg-[#d9042b13] text-[#D9042B] p-4 rounded-full">{details.icon}</div>
                        <div>
                            <h1 className="text-[17px] font-bold">{details.title}</h1>
                            <p>{details.info}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Info;