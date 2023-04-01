// authentication urls
export const SIGN_IN_ENDPOINT = "/api/auth/signin/";
export const SIGN_UP_ENDPOINT = "/api/auth/signup/";

// books
export const BOOKS_ENDOINT = "/api/books/"
export const BOOK_WITH_ID_ENDPOINT = (book_id: Number) =>
    `/api/books/${book_id}/`;

// author
export const AUTHORS_ENDOINT = "/api/authors/"
export const AUTHOR_WITH_ID_ENDPOINT = (author_id: Number) =>
    `/api/authors/${author_id}/`;

// publisher
export const PUBLISHER_ENDPOINT = "/api/publishers/"
export const PUBLISHER_WITH_ID_ENDPOINT = (publisher_id: Number) =>
    `/api/publishers/${publisher_id}/`;