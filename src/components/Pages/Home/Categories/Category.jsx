import { Link } from "react-router-dom";

const Category = ({category}) => {
    return (
        <Link to={category.path} className="bg-white px-8 py-14 rounded-xl text-[#FFBE30] hover:text-white hover:bg-[#FFBE30] transition-all duration-200">
            <img className="w-14" src={category.icon} alt="" />
            <h1 className="text-2xl  uppercase font-mono font-bold mt-4">{category.name}</h1>
        </Link>
    );
};

export default Category;