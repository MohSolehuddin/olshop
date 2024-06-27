import { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");

export default function validToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res
      .status(405)
      .json({ valid: false, message: `Method ${req.method} not allowed` });
  }
  let { token } = req.body;
  if (!token) {
    res.status(401).json({ valid: false, message: "Token not provided" });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err: any, user: any) => {
    if (err) {
      res.status(403).json({ valid: false, message: "Invalid token" });
    }
    res.status(200).json({ valid: true, message: "Valid token" });
    return user;
  });
}
