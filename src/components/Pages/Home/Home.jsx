import useTitle from "../../../hooks/useTitle";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import LabreportCategory from "./LabreportCategory/LabreportCategory";
import LatestLecture from "./LatestLecture/LatestLecture";
import LectureCategory from "./LectureCategory/LectureCategory";
import PresentationCategory from "./PresentationCategory/PresentationCategory";
import SlideCategory from "./SlideCategory/SlideCategory";
import Subjects from "./Subjects/Subjects";

const Home = () => {
    useTitle('Home | Learner Cafe');
    return (
        <div>
            <ScrollToTop/>
            <Banner/>
            <Categories/>
            <Subjects/>
            <LatestLecture/>
            <LectureCategory/>
            <PresentationCategory/>
            <LabreportCategory/>
            <SlideCategory/>
        </div>
    );
};

export default Home;