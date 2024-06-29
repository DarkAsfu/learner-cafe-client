import { useLoaderData } from "react-router-dom";
import Card from "../../Shared/Card/Card";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import useTitle from "../../../hooks/useTitle";

const CategoryWise = () => {
    const categoriesDoc = useLoaderData();
    useTitle(`${categoriesDoc[0].category} | Learner Cafe`);
    return (
        <div className="dark:bg-[#080808]">
            <div className="w-11/12 mx-auto py-24 ">
                <ScrollToTop />
                {
                    categoriesDoc.length == 0 ? <h1 className="text-center text-2xl font-mono">No Document. It will be add</h1> :
                        <div className="grid md:grid-cols-4 gap-10">
                            {
                                categoriesDoc.map(document => <Card key={document._id} document={document}></Card>)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default CategoryWise;