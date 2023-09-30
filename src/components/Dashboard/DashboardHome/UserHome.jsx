import CountUp from 'react-countup';
import useMyDocument from "../../../hooks/useMyDocument";
import useLatestLecture from "../../../hooks/useLatestLecture";
import useBookmarks from '../../../hooks/useBookmarks';

const UserHome = () => {
    const [alllecture] = useLatestLecture();
    const [myDocument] = useMyDocument();
    const [bookmarks] = useBookmarks();

    return (
        <div className="px-3 md:px-10">
            <h1 className="text-center text-3xl font-bold text-white uppercase mt-12">Dashboard Home</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10 mt-10 md:mt-24 pb-[80%] md:pb-0">
                <div className="text-center py-10 rounded-2xl bg-[#191C23] ">
                    <h1 className='text-[#8C52FF] text-2xl font-bold'>Document</h1>
                    <CountUp
                        className='text-[#e8e8e8] font-bold font-sans text-[40px]'
                        start={0}
                        end={alllecture?.length || 0}
                        duration={2} // Duration of the animation in seconds
                        separator="," // Separator for thousands
                    />
                    <span className='text-[#e8e8e8] font-bold font-sans text-[40px]'>+</span>
                </div>
                <div className="text-center py-10 rounded-2xl bg-[#191C23]">
                    <h1 className='text-[#8C52FF] text-2xl font-bold'>My Document</h1>
                    <CountUp
                        className='text-[#e8e8e8] font-bold font-sans text-[40px]'
                        start={0}
                        end={myDocument?.length || 0}
                        duration={2} // Duration of the animation in seconds
                        separator="," // Separator for thousands
                    />
                    {/* <span className='text-[#e8e8e8] font-bold font-sans text-[60px]'>+</span>*/}
                </div>
                <div className="text-center py-10 rounded-2xl bg-[#191C23]">
                    <h1 className='text-[#8C52FF] text-2xl font-bold'>Bookmarks</h1>
                    <CountUp
                        className='text-[#e8e8e8] font-bold font-sans text-[40px]'
                        start={0}
                        end={bookmarks?.length || 0}
                        duration={2} // Duration of the animation in seconds
                        separator="," // Separator for thousands
                    />
                </div>
                <div className="text-center py-10 rounded-2xl bg-[#191C23]"><h1 className='text-[#8C52FF] text-2xl font-bold'>Bookmarks</h1>
                    <CountUp
                        className='text-[#e8e8e8] font-bold font-sans text-[40px]'
                        start={0}
                        end={myDocument?.length || 0}
                        duration={2} // Duration of the animation in seconds
                        separator="," // Separator for thousands
                    />
                </div>
            </div>
        </div>
    );
};

export default UserHome;
