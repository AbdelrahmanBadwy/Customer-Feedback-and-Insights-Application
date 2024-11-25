import { openai } from "../lib/openai";

export const performSentimentAnalysis = async (
  text: string
): Promise<"Positive" | "Neutral" | "Negative"> => {
  try {
    const prompt = `Analyze the sentiment of the following text and return "Positive", "Neutral", or "Negative":\n\n"${text}"`;
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Using the latest model
      messages: [
        {
          role: "user",
          content: prompt, // The input text to analyze sentiment
        },
      ],
      max_tokens: 10, // Adjust as needed for shorter responses
    });
    const sentiment =
      response.choices[0] &&
      response.choices[0].message &&
      response.choices[0].message.content
        ? (response.choices[0].message.content.trim() as
            | "Positive"
            | "Neutral"
            | "Negative")
        : "Neutral";
    return sentiment || "Neutral";
  } catch (error) {
    console.error("Error performing sentiment analysis:", error);
    throw new Error("Failed to analyze sentiment.");
  }
};
