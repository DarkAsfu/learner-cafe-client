import { FaLinkedin, FaTwitter } from 'react-icons/fa6';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <section className="bg-[#002e3c] text-white">
            <nav className=" grid grid-cols-3 gap-2 md:flex md:gap-20 pt-6 w-11/12 mx-auto text-[#b4bbd1] font-mono text-[14px]">
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/contact' className="link link-hover">Contact</Link>
                <Link to='/dashboard' className="link link-hover">Dashboard</Link>
                <Link to='/upload' className="link link-hover">Upload</Link>
                <Link to='/explore' className="link link-hover">Explore</Link>
                <Link to='/books' className="link link-hover">Books</Link>
            </nav>
            <hr className="Footer_separator__eUnAb" />
            <footer className="footer py-4 text-center">
                <aside className="flex justify-between w-11/12 mx-auto">
                    <p className="font-mono text-[14px] text-[#b4bbd1]">Copyright © 2023 <span className="">GUB MATERIAL</span></p>
                    <p className="flex items-center">
                        <FaLinkedin className='rotate-[-270] text-[28px] border-r pr-2 text-[#b4bbd1]'></FaLinkedin>
                        <FaTwitter className='text-[28px] pr-2 text-[#b4bbd1]'></FaTwitter>

                    </p>
                </aside>
            </footer>
        </section>
    );
};

export default Footer;