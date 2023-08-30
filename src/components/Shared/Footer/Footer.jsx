import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="bg-[#09212E]">
            <footer className="footer w-11/12 mx-auto text-base-content py-10">
                <div>
                    <Link to="/">
                        <h1 className="text-[#fff] text-2xl font-bold uppercase font-mono"><span className="text-[#FFBE30]">GUB</span>Material</h1>
                    </Link>
                    <p className="text-white">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="text-[#FFBE30] font-sans uppercase font-bold">Services</span>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </div>
                <div>
                    <span className="text-[#FFBE30] font-sans uppercase font-bold">Company</span>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </div>
                <div>
                    <span className="text-[#FFBE30] font-sans uppercase font-bold">Legal</span>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;