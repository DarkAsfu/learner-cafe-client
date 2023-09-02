import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import LabreportCategory from "./LabreportCategory/LabreportCategory";
import LatestLecture from "./LatestLecture/LatestLecture";
import LectureCategory from "./LectureCategory/LectureCategory";
import PresentationCategory from "./PresentationCategory/PresentationCategory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <LatestLecture/>
            <LectureCategory/>
            <PresentationCategory/>
            <LabreportCategory/>
        </div>
    );
};

export default Home;