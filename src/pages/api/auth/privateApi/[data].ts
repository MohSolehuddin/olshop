import { NextApiRequest, NextApiResponse } from "next";
import MongoAtlas from "../../../../utils/db";
import { isTokenValid } from "../validateToken";

const privateData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    return res.status(404).json({
      error: true,
      errorMessage: `Please token is required to access this API`,
    });
  }
  let token = req.headers.authorization.split(" ")[1];
  const tokenValid = await isTokenValid(token);

  if (!tokenValid.status) {
    return res.status(404).json({
      error: true,
      errorMessage: `Invalid token`,
    });
  }
  const db = new MongoAtlas(process.env.MONGODB_URI, "portofolio");
  const validCollection = ["portofolio", "mySkillSet", "products"];

  try {
    if (!validCollection.includes(req.query.data as string)) {
      return res.status(404).json({
        error: true,
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
        error: true,
        errorMessage: `Method ${req.method} not allowed!!!`,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      error: true,
      errorMessage: `Failed to connect to database, error message: ${error.message}`,
    });
  } finally {
    // Tutup koneksi database setelah operasi selesai
    await db.close();
  }
};

export default privateData;
