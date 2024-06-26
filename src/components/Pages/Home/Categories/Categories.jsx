import Category from "./Category";

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Lecture",
            icon: "https://i.ibb.co/z5WtrbR/lectern.png",
            path: "lecture"
        },
        {
            id: 2,
            name: "Slides",
            icon: "https://i.ibb.co/JRZLJKj/google-2.png",
            path: "slide"
        },
        {
            id: 3,
            name: "Lab Report",
            icon: "https://i.ibb.co/7YMfZMf/lab.png",
            path: "labreport"
        },
        {
            id: 4,
            name: "Presentation",
            icon: "https://i.ibb.co/kJNvgsF/presentation.png",
            path: "presentation"
        },
        {
            id: 5,
            name: "Suggestion",
            icon: "https://i.ibb.co/Ms1YHL2/idea.png",
            path: "suggestion"
        },
        {
            id: 6,
            name: "Project",
            icon: "../../../../../public/project.png",
            path: "project"
        }
    ]
    return (
        <>
            <div className=" card shadow-xl bg-[#fff] dark:bg-[#181718] pt-10 mt-10 xl:-mt-36 xl:w-11/12 md:mx-auto pb-10 mx-2">
                <div data-aos="fade-up" className="w-11/12 mx-auto">
                    <h1 className="text-[28px] text-[#0D0D0D] dark:text-white font-sans  uppercase font-bold"><span className="text-[#D9042B]">all</span>Categories</h1>
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-10">
                        {
                            categories.map(category => <Category key={category.id} category={category} />)
                        }
                    </div>
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="fill-[#F2F2F2]" d="M738,99l262-93V0H0v5.6L738,99z"></path>
            </svg> */}
        </>
    );
};

export default Categories;