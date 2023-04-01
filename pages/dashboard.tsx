
import useSWR from "swr";
import { BOOKS_ENDOINT } from "../constants/api-routes";
import { APIFetcher } from "../lib/services";
export default function Dashboard() {

    // Fetch all the authors
    const { data: bookList, error: authorError } = useSWR([BOOKS_ENDOINT], (url) =>
        APIFetcher(url)
    );

    return (
        <div>
            {bookList && bookList?.data ? bookList.data.map((book) => (
                <option key={book._id} value={book._id}>
                    {book.name}
                </option>
            )) : "currently there are not books availabe"}

        </div>
    );
}