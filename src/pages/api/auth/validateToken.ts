import { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");

export async function isTokenValid(token: string) {
  try {
    let decode = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(decode);

    let result = {
      status: true,
      data: decode,
    };
    return result;
  } catch (error) {
    let result = {
      status: false,
      data: error,
    };
    return result;
  }
}

export default function validToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ valid: false, message: `Method ${req.method} not allowed` });
  }
  let { token } = req.body;
  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ valid: false, message: "Token not provided" });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ valid: false, message: "Invalid token" });
    }
    res.status(200).json({ valid: true, message: "Valid token" });
    console.log(user);
    console.log(err);

    return user;
  });
}
