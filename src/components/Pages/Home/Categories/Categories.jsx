import Category from "./Category";

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Lecture",
            icon: "https://i.ibb.co/z5WtrbR/lectern.png",
            path: "/lecture"
        },
        {
            id: 2,
            name: "Slides",
            icon: "https://i.ibb.co/JRZLJKj/google-2.png",
            path: "/slides"
        },
        {
            id: 3,
            name: "Lab Repprt",
            icon: "https://i.ibb.co/7YMfZMf/lab.png",
            path: "/labreport"
        },
        {
            id: 4,
            name: "Presentation",
            icon: "https://i.ibb.co/kJNvgsF/presentation.png",
            path: "/presentation"
        },
    ]
    console.log(categories);
    return (
        <div className="bg-[#09212E] py-14">
            <div className="w-11/12 mx-auto">
            <h1 className="text-[28px] text-white font-sans  uppercase font-bold"><span className="text-[#FFBE30]">all</span>Categories</h1>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }
            </div>
            </div>
        </div>
    );
};

export default Categories;