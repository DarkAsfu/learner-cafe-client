import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const img_hosting_token = import.meta.env.VITE_ImageUpload_Token;
const UploadBooks = () => {
    useTitle('Upload Book | Learner Cafe');
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const handlesubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookname.value;
        const driveLink = form.drivelink.value;
        const image = form.coverImg.files;
        const book = {
            bookName,
            driveLink,
            image
        }
        const formData = new FormData();
        formData.append('image', book.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const book = {bookName, driveLink, image: imgURL};
                fetch('https://learner-cafe-server.vercel.app/books', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(book)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire(
                            'Thank you!',
                            'Your Book is added',
                            'success'
                        )
                        form.reset();
                    }
                })
            }
        })
    }
    return (
        <div>
            <div className="bg-[url(https://i.ibb.co/syp2dX5/explore.jpg)] bg-cover bg-fixed bg-no-repeat bg-[#ffffff] py-20 ">
            <div className="md:w-8/12 lg:w-6/12 md:mx-auto py-10 my-20 bg-white md:px-10 px-6 shadow-md rounded-md mx-3">
                <h1 className="text-[#D9042B] text-2xl font-bold">Upload Your BOOKS</h1>
                <form onSubmit={handlesubmit}>
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text capitalize font-mono font-bold text-[16px]">subject name</span>
                            </label>
                            <input type="text" placeholder="Enter your book name" name="bookname" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text capitalize font-mono font-bold text-[16px]">Document drive link</span>
                        </label>
                        <input type="text" placeholder="Paste google drive link" name="drivelink" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full max-w-xs mt-4">
                        <label className="label">
                            <span className="label-text capitalize font-mono font-bold text-[16px]">Select Cover Image</span>
                        </label>
                        <input type="file" name="coverImg" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn mt-4 text-[#fff] hover:text-black  w-full bg-black capitalize" type="submit" value="Upload Books" />
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UploadBooks;