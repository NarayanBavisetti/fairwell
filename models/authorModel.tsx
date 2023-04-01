import mongoose from "mongoose";
import { AuthorInterface } from "../types";

const authorSchema = new mongoose.Schema<AuthorInterface>({
  author_name: { type: String, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FairwellBooks' }],
});

const AuthorModel =
  mongoose.models.FairwellAuthors ||
  mongoose.model<AuthorInterface>("FairwellAuthors", authorSchema);

export default AuthorModel;