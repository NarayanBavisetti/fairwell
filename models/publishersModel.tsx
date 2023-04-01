import mongoose from "mongoose";
import { PublisherInterface } from "../types";

const bookSchema = new mongoose.Schema<PublisherInterface>({
  publisher_name: { type: String, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FairwellBooks' }],
});

const BookModel =
  mongoose.models.FairwellBooks ||
  mongoose.model<PublisherInterface>("FairwellPublishers", bookSchema);

export default BookModel;