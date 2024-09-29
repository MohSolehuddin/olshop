import MongoAtlas from "@/utils/db";
import addData from "../../utils/addData";
import { NextApiRequest, NextApiResponse } from "next";

interface resultType {
  success: boolean;
  message: string;
}
// Pastikan bahwa variabel global hanya diinisialisasi sekali
if (!globalThis.db) {
  globalThis.db = new MongoAtlas(process.env.MONGODB_URI, "PwMg");
}

export default async function handleAddData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      let result = (await addData(req.body)) as resultType;
      if (!result.success) {
        res.status(302).json(result);
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  } else {
    res
      .status(405)
      .json({ success: false, message: `Method ${req.method} not allowed` });
  }
}
