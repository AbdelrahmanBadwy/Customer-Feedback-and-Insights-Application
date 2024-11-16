import { NextApiRequest, NextApiResponse } from "next";
import { fetchFeedbackList } from "@/lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const feedbackList = await fetchFeedbackList();
      res.status(200).json(feedbackList);
    } catch (error) {
      res.status(500).json({ message: "Error fetching feedback" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
