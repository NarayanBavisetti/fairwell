import { hash } from "bcryptjs";
import connectMongoDB from "../../../lib/mongoDB";
import UserModel from "../../../models/usersModel";
import { NextApiRequest, NextApiResponse } from "next";
import { UserInterface } from "../../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectMongoDB().catch((error) => res.json({ error: "Connection Failed" }));
  if (req.method == "POST") {
    if (!req.body)
      return res.status(400).json({ message: "Please fill all the details" });
    const { username, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });

    if (existingUser)
      return res.status(422).json({ message: "User already exists" });

    const user: UserInterface = new UserModel({ username, email, password: await hash(password, 12) });

    const data = await user.save();
    if (data) return res.status(200).json({ message: "Saved successfully" });
    else return res.status(400).json({ message: "Not Saved " });

  } else {
    res.status(500).json({ message: "HTTP method not allowed" });
  }
};

export default handler;


