import { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../../lib/mongoDB";
import PublisherModel from "../../models/publishersModel";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectMongoDB().catch((error) => res.json({ error: "Connection Failed" }));
    const { method } = req;

    switch (method) {
      case 'GET':
        try {
          const users = await PublisherModel.find({});
          res.status(200).json({ success: true, data: users });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case 'POST':
        try {
          const user = await PublisherModel.create(req.body);
          res.status(201).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case 'PUT':
        try {
          const { id } = req.query;
          const user = await PublisherModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          });
          if (!user) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case 'DELETE':
        try {
          const { id } = req.query;
          const user = await PublisherModel.findByIdAndDelete(id);
          if (!user) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
};

export default handler;
