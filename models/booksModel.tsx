import mongoose from "mongoose";
import { BookInterface } from "../types";

const bookSchema = new mongoose.Schema<BookInterface>({
  name: { type: String, required: true },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FairwellPublishers",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FairwellAuthors",
  },
  price: { type: Number, required: true },
  no_of_books: { type: Number, required: true },
  description: { type: String, required: true },
  genre:{ type: String, required: true },
  coverImage: { type: String, required: true },
});

const BookModel =
  mongoose.models.FairwellBooks ||
  mongoose.model<BookInterface>("FairwellBooks", bookSchema);

export default BookModel;
