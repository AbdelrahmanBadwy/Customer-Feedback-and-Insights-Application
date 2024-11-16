import { NextApiRequest, NextApiResponse } from "next";
import { submitFeedback } from "../../lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { text } = req.body;
      const feedback = await submitFeedback(text);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(500).json({ message: "Error submitting feedback" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
