import mongoose from "mongoose";
import { AuthorInterface } from "../types";

const authorSchema = new mongoose.Schema<AuthorInterface>({
  author_name: { type: String, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FairwellBooks' }],
});

const BookModel =
  mongoose.models.FairwellBooks ||
  mongoose.model<AuthorInterface>("FairwellAuthors", authorSchema);

export default BookModel;