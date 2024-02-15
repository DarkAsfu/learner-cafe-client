import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import useTitle from "../../../hooks/useTitle";
import useBooks from "../../../hooks/useBooks";

const Books = () => {
    useTitle('Book | Learner Cafe');
    const [books, loading, refetch] = useBooks();

    // console.log(books);
    return (
        <div className="dark:bg-[#080808]">
        <ScrollToTop/>
        <div className="w-11/12 mx-auto py-28 min-h-screen">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-10 ">
                {   loading ? <div className="text-center flex justify-center">
                  <img className="mt-10" src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif" alt="" />
                </div> :
                    books.map(book => <div key={book._id} className="card border border-1 dark:border-[#222] h-[340px] md:h-[410px]">
                      <img src={book.image} alt="book-cover" className="h-[200px] md:h-[300px] rounded-t-xl" />
                    <div className="px-4 pb-2">
                      <h2 className="card-title text-[14px] text-left dark:text-white">{book.bookName}</h2>
                      <div>
                        <Link target="_blank" to={book.driveLink}><button className="absolute bottom-3 bg-[black] p-2 rounded-lg text-white text-[14px]">Download Book</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Books;