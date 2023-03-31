import mongoose from "mongoose";

export interface UserInterface extends mongoose.Document {
  email: string;
  username: string;
  password: string;
}