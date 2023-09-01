import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import LatestLecture from "./LatestLecture/LatestLecture";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <LatestLecture/>
        </div>
    );
};

export default Home;