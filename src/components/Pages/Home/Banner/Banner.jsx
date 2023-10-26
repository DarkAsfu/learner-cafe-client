import { TypeAnimation } from 'react-type-animation';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="banner bg-fixed">
            <div className='text-white md:w-9/12 px-6 mx-auto md:pt-[10%] pt-[40%]'>
                <div className='md:text-[64px] text-[32px] font-semibold font-serif'>
                    <h1 className='capitalize z-10'>Read, Upload and share</h1>
                    <TypeAnimation
                        sequence={['Presentation', 1000, 'Lecture Sheet', 1000, 'Lab Report', 1000, 'GUB Slides', 1000]}
                        style={{ color: '#000' }}
                        repeat={Infinity}
                    />
                </div>
                <div className="divider text-white md:w-[350px] w-[150px] bg-white h-2"></div>
                <p className='text-[#OD0D0D] text-[15px] md:text-[20px] '>Discover an array of documents. Help us amplify learning together.</p>
                <Link to="/explore"><button className='btn text-[#fff] bg-[#D9042B] hover:text-black px-10 pt-4 pb-4 mt-10 border-0 hover:border font-bold'>Explore All Document</button></Link>
            </div>
            <div className="rotate-180 hidden">
                <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="fill-[#F2F2F2]" d="M738,99l262-93V0H0v5.6L738,99z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;