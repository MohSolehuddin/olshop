import { NextApiRequest, NextApiResponse } from "next";
import MongoAtlas from "../../../utils/db";

const products = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new MongoAtlas(process.env.MONGODB_URI, "portofolio");
  const validCollection = ["portofolio", "skills", "certificats"];

  try {
    // Memeriksa validitas query parameter
    if (!validCollection.includes(req.query.data as string)) {
      return res.status(404).json({
        error: "Failed to connect to database",
        errorMessage: `Query ${req.query.data} not allowed!!!`,
      });
    }

    await db.connect();

    if (req.method === "GET") {
      console.log(req.query);

      const productData = await db.getData(req.query.data as string, {});
      return res.status(200).json(productData);
    } else {
      res.setHeader("Allow", ["GET"]);
      return res.status(405).json({
        error: "Method not allowed",
        errorMessage: `Method ${req.method} not allowed!!!`,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      error: "Failed to connect to database",
      errorMessage: error.message,
    });
  } finally {
    // Tutup koneksi database setelah operasi selesai
    await db.close();
  }
};

export default products;
