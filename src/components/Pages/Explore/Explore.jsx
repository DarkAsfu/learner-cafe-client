import useTitle from "../../../hooks/useTitle";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import ExploreBody from "./ExploreBody/ExploreBody";


const Explore = () => {
    useTitle('Explore | Learner Cafe');
    return (
        <>
        <ScrollToTop/>
        <ExploreBody/>
        </>
    );
};

export default Explore;