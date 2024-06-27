import { NextApiRequest, NextApiResponse } from "next";
import MongoAtlas from "../../../utils/db";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new MongoAtlas(process.env.MONGODB_URI, "portofolio");
  const { username, password } = req.body;

  try {
    await db.connect();

    const dataUser = await db.getData("admin", { username: req.body.username });
    if (dataUser.length === 0) {
      res.status(401).json({
        status: false,
        errorMessage: "Username or password is incorrect",
      });
    }
    let isMatch = await bcrypt.compare(password, dataUser[0].password);

    if (req.method === "POST") {
      if (dataUser[0].username === username && isMatch) {
        let token = jwt.sign({ username }, process.env.SECRET_KEY, {
          expiresIn: "1d",
        });
        res.status(200).json({ status: true, token });
      } else {
        res.status(500).json({
          status: false,
          errorMessage: "Username or password is incorrect",
        });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error: any) {
    res.status(500).json({
      error: "Failed to connect to database",
      errorMessage: error.message,
    });
  }
};

export default auth;
