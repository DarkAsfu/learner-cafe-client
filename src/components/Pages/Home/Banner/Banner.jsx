import { TypeAnimation } from 'react-type-animation';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className='text-white md:w-9/12 px-6 mx-auto md:pt-[10%] pt-[40%]'>
                <div className='md:text-[64px] text-[32px] font-semibold font-serif'>
                    <h1 className='capitalize'>Read, Upload and share</h1>
                    <TypeAnimation
                        sequence={['Presentation', 1000, 'Lecture Sheet', 1000, 'Lab Report', 1000, 'GUB Slides', 1000]}
                        style={{ backgroundColor: '#FFBE30', color:'#09212E' }}
                        repeat={Infinity}
                    />
                </div>
                <div className="divider text-white md:w-[350px] w-[150px] bg-white h-2"></div> 
                <p className='text-[#FFBE30] text-[20.8px]'>Discover an array of documents. Help us amplify learning together.</p>
            </div>
        </div>
    );
};

export default Banner;