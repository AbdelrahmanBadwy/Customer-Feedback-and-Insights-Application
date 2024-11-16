import { OpenAI } from "openai";

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateSummary = async (text: string) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a text summarizer. Provide concise summaries.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    return response.choices[0].message.content || "No summary available";
  } catch (error) {
    console.error("Error generating summary:", error);
    throw new Error("Error generating summary");
  }
};

export const analyzeFeedback = async (
  text: string
): Promise<{ sentiment: string; summary: string }> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a sentiment analyzer. Respond in the following format exactly:\nSentiment: [positive/negative/neutral]\nSummary: [brief summary]",
        },
        {
          role: "user",
          content: `Analyze this feedback: "${text}"`,
        },
      ],
      temperature: 0.3,
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content returned from OpenAI API");
    }

    // More robust parsing
    const lines = content.split("\n");
    let sentiment = "";
    let summary = "";

    for (const line of lines) {
      if (line.toLowerCase().startsWith("sentiment:")) {
        sentiment = line.split(":")[1].trim().toLowerCase();
      } else if (line.toLowerCase().startsWith("summary:")) {
        summary = line.split(":")[1].trim();
      }
    }

    // Validate sentiment
    if (!["positive", "negative", "neutral"].includes(sentiment)) {
      sentiment = "neutral"; // Default fallback
    }

    // Validate summary
    if (!summary) {
      summary = "No summary available";
    }

    console.log("Parsed feedback analysis:", { sentiment, summary });
    return { sentiment, summary };
  } catch (error) {
    console.error("Error analyzing feedback:", error);
    throw new Error("Error analyzing feedback");
  }
};
