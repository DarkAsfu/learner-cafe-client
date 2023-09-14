import { useLoaderData } from "react-router-dom";

const SubjectWise = () => {
    const subjectwise = useLoaderData();
    console.log(subjectwise);
    return (
        <div className="pt-3">
            Document: {subjectwise.length}
        </div>
    );
};

export default SubjectWise;