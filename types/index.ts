import mongoose, { Types } from "mongoose";

export interface UserInterface extends mongoose.Document {
  email: string;
  username: string;
  password: string;
}

export interface BookInterface extends mongoose.Document {
  name: string;
  publisher: Types.ObjectId;
  author: Types.ObjectId;
  price: number;
  no_of_books: number;
  description: string;
  genre: string;
  coverImage: string;
}

export interface AuthorInterface extends mongoose.Document {
  author_name: string;
  books: Array<Types.ObjectId>;
}
export interface PublisherInterface extends mongoose.Document {
  publisher_name: string;
  books: Array<Types.ObjectId>;
}
