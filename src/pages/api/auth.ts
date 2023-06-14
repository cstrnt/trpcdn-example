import { type NextApiRequest, type NextApiResponse } from "next";
import crypto from "crypto";

export default function authHandler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.cookies["session"]) {
    const sessionKey = crypto.randomBytes(16).toString("hex");
    res.setHeader("Set-Cookie", `session=${sessionKey}; HttpOnly`);
  }
  return res.status(200).json({ name: "John Doe" });
}
