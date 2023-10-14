import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://learner-cafe-server.vercel.app/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    console.log(books);
    return (
        <>
        <ScrollToTop/>
        <div className="w-11/12 mx-auto py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {
                    books.map(book => <div key={book._id} className="card border h-[390px]">
                      <img src={book.image} alt="Shoes" className="h-[300px] rounded-t-xl" />
                    <div className="px-4 pb-2">
                      <h2 className="card-title text-[14px] text-center">{book.bookName}</h2>
                      <div>
                        <Link target="_blank" to={book.driveLink}><button className="absolute bottom-3 bg-[black] p-2 rounded-lg text-white text-[14px]">Download Book</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
        </>
    );
};

export default Books;