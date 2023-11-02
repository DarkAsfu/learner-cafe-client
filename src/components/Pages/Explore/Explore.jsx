import useTitle from "../../../hooks/useTitle";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import ExploreBanner from "./ExploreBanner/ExploreBanner";
import ExploreBody from "./ExploreBody/ExploreBody";


const Explore = () => {
    useTitle('Explore | Learner Cafe');
    return (
        <>
        <ScrollToTop/>
        <ExploreBanner/>
        <ExploreBody/>
        </>
    );
};

export default Explore;