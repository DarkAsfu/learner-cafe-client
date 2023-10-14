import { useLoaderData } from "react-router-dom";
import Card from "../../Shared/Card/Card";

const CategoryWise = () => {
    const categoriesDoc = useLoaderData();
    console.log(categoriesDoc);
    return (
        <div className="w-10/12 mx-auto py-24">
            {
                categoriesDoc.length == 0 ? <h1 className="text-center text-2xl font-mono">No Document. It will be add</h1>:
                <div className="grid md:grid-cols-4 gap-10">
                {
                    categoriesDoc.map(document => <Card key={document._id} document={document}></Card>)
                }
            </div>
            }
            
        </div>
    );
};

export default CategoryWise;