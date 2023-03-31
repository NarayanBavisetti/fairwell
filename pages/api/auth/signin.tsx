import { compare } from "bcryptjs";
import connectMongoDB from "../../../lib/mongoDB";
import UserModel from "../../../models/usersModel";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectMongoDB().catch((error) => res.json({ error: "Connection Failed" }));
    if (req.method == "POST") {
        if (!req.body)
            return res.status(400).json({ message: "Please fill all the details" });
        const { email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (!existingUser)
            return res.status(422).json({ message: "User does not exist" });

        const matchPassword = await compare(password, existingUser.password);
        if (matchPassword) {
            return res.status(200).json({ message: "Logged in successfully" });
        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    } else {
        res.status(500).json({ message: "HTTP method not allowed" });
    }
};

export default handler;
