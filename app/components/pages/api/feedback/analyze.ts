import { NextApiRequest, NextApiResponse } from "next";
import { analyzeFeedbackAndUpdate } from "../../../lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { id, text } = req.body;
      const analysis = await analyzeFeedbackAndUpdate(id, text);
      res.status(200).json(analysis);
    } catch (error) {
      res.status(500).json({ message: "Error analyzing feedback" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
