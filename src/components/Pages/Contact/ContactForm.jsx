import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
const ContactForm = () => {
    const form = useRef()
    const handleSendMessage = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_b1023pk', 'template_sfks7ih', form.current, 'q1JNcaW28QoLAtq0t')
        .then((result) => {
            console.log(result.text);
            Swal.fire(
              'Good job!',
              'You message already send!',
              'success'
            )
            // form.reset()
        }, (error) => {
            console.log(error.text, 'error');
        });
    } 
    return (
        <div className="bg-white px-6 py-10 rounded-md">
            <h1 className="text-black text-2xl font-semibold capitalize">Send Message</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maxime.</p>
            <form ref={form} onSubmit={handleSendMessage}>
                <div className="flex gap-3 mt-3">
                <input type="text" placeholder="Your Name" name="name" className="input w-full input-bordered" />
                <input type="email" placeholder="Email Address" name="email" className="input input-bordered w-full" />
                </div>
                <textarea className="textarea textarea-bordered h-[100px] w-full mt-4" name="message" placeholder="Message"></textarea>
                <div className="mt-4">
                    {/* <button className="btn bg-[#D9042B] text-[#fff] hover:text-[#D9042B] hover:bg-[#fff] px-8">Send Message</button> */}
                    <input className="btn bg-[#D9042B] text-[#fff] hover:text-[#D9042B] hover:bg-[#fff] px-8" type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;