import mongoose from "mongoose";
import { UserInterface } from "../types";

const UserSchema = new mongoose.Schema<UserInterface>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel =
mongoose.models.FairwellUser||
  mongoose.model<UserInterface>("FairwellUser", UserSchema);

export default UserModel;
