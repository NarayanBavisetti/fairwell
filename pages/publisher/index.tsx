import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Publisher } from "../../lib/services/publisher.service";
import { APIFetcher } from "../../lib/services";
import { AUTHORS_ENDOINT, PUBLISHER_ENDPOINT } from "../../constants/api-routes";
import { Author } from "../../lib/services/author.services";
import { Book } from "../../lib/services/books.services";

export default function AddBookForm() {

    const router = useRouter();
    const [name, setName] = useState("");
    const [publisher, setPublisher] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [no_of_books, setNoOfBooks] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const [publisherName, setPublisherName] = useState("");
    const [authorName, setAuthorName] = useState("");

    // Fetch all the publishers
    const { data: publisherList, error: publisherError } = useSWR([PUBLISHER_ENDPOINT], (url) =>
        APIFetcher(url)
    );

    // Fetch all the authors
    const { data: authorList, error: authorError } = useSWR([AUTHORS_ENDOINT], (url) =>
        APIFetcher(url)
    );

    const handleSubmitPublisher = async (e) => {
        e.preventDefault();
        let payload = { publisher_name: publisherName };
        if (payload) {
            return Publisher.create(payload)
                .then((response) => {
                    console.log(response, "response")
                    // if (response) router.push(`/publisher`);
                    alert("uploaded successfully")
                })
                .catch((error) => {
                    alert("Error Signing Up",);
                    console.log(error);
                });
        } else {
            alert("error");
        }
    }

    const handleSubmitAuthor = async (e) => {
        e.preventDefault()
        let payload = { author_name: authorName };
        if (payload) {
            return Author.create(payload)
                .then((response) => {
                    console.log(response, "response")
                    // if (response) router.push(`/publisher`);
                    alert("uploaded successfully")
                })
                .catch((error) => {
                    alert("Error Signing Up",);
                    console.log(error);
                });
        } else {
            alert("error");
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookData = {
            name,
            publisher,
            author,
            price,
            no_of_books,
            description,
            genre,
            coverImage,
        };
 
        if (bookData) {
            return Book.create(bookData)
                .then((response) => {
                    console.log(response, "response")
                    alert("uploaded successfully")
                    if (response) router.push(`/dashboard`);
                })
                .catch((error) => {
                    alert("Error while uploading",);
                    console.log(error);
                });
        } else {
            alert("error");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="publisher">Publisher:</label>
                    <select
                        id="publisher"
                        value={publisher}
                        onChange={(event) => setPublisher(event.target.value)}
                        required
                    >
                        <option value="">Select publisher</option>
                        {publisherList && publisherList?.data ? publisherList.data.map((publisher) => (
                            <option key={publisher._id} value={publisher._id}>
                                {publisher.publisher_name}
                            </option>
                        )) : null}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <select
                        id="author"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        required
                    >
                        <option value="">Select Author</option>
                        {authorList && authorList?.data ? authorList.data.map((author) => (
                            <option key={author._id} value={author._id}>
                                {author.author_name}
                            </option>
                        )) : null}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="no_of_books">Number of Books:</label>
                    <input
                        type="number"
                        id="no_of_books"
                        value={no_of_books}
                        onChange={(event) => setNoOfBooks(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        value={genre}
                        onChange={(event) => setGenre(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="coverImage">Cover Image:</label>
                    <input
                        type="text"
                        id="coverImage"
                        value={coverImage}
                        onChange={(event) => setCoverImage(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Book</button>
            </form>

            <form >
                <div className="form-group">
                    <label htmlFor="coverImage">Publisher Name</label>
                    <input
                        type="text"
                        id="publiasherName"
                        value={publisherName}
                        onChange={(event) => setPublisherName(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" onClick={handleSubmitPublisher} className="submit-button">Add Publisher</button>
            </form>

            <form onSubmit={handleSubmitAuthor}>
                <div className="form-group">
                    <label htmlFor="coverImage">Author Name</label>
                    <input
                        type="text"
                        id="authorName"
                        value={authorName}
                        onChange={(event) => setAuthorName(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Author</button>
            </form>
        </>
    );
}
