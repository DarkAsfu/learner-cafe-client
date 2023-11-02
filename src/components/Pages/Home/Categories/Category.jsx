import { Link } from "react-router-dom";

const Category = ({category}) => {
    return (
        <Link  to={`category/${category.path}`} className="bg-[url('https://i.ibb.co/7yWNSgc/bg-aaseet.png')] bg-[#16445c] px-3 md:px-8 py-8 md:py-14 rounded-xl text-[#fff] hover:bg-[#D9042B] transition-all duration-200">
            <img className="w-10 md:w-14" src={category.icon} alt="" />
            <h1 className="text-[16px] md:text-2xl  uppercase font-mono font-bold mt-4">{category.name}</h1>
        </Link>
    );
};

export default Category;