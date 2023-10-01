const ContactForm = () => {
    
    const handleSendMessage = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message);
    }
    return (
        <div className="bg-white px-6 py-10 rounded-md">
            <h1 className="text-black text-2xl font-semibold capitalize">Send Message</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maxime.</p>
            <form onSubmit={handleSendMessage}>
                <div className="flex gap-3 mt-3">
                <input type="text" placeholder="Your Name" name="name" className="input w-full input-bordered" />
                <input type="text" placeholder="Email Address" name="email" className="input input-bordered w-full" />
                </div>
                <textarea className="textarea textarea-bordered h-[100px] w-full mt-4" name="message" placeholder="Message"></textarea>
                <div className="mt-4">
                    <button className="btn bg-[#D9042B] text-[#fff] hover:text-[#D9042B] hover:bg-[#fff] px-8">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;