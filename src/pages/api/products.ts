import { NextApiRequest, NextApiResponse } from "next";
import MongoAtlas from "../../utils/db";

const products = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new MongoAtlas(process.env.MONGODB_URI, "portofolio");
  try {
    await db.connect();

    if (req.method === "GET") {
      const productData = await db.getData("products", {});
      res.status(200).json(productData);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error: any) {
    res.status(500).json({
      error: "Failed to connect to database",
      errorMessage: error.message,
    });
  } finally {
    db.close();
  }
};

export default products;
