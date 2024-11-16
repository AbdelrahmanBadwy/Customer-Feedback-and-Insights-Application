import { OpenAI } from "openai";

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateSummary = async (text: string) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Specify the model (you can also use 'gpt-3.5-turbo')
      messages: [{ role: "user", content: text }],
    });

    return response.choices[0].message.content; // Return the AI-generated summary
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
      model: "gpt-3.5-turbo", // Specify the OpenAI model
      messages: [
        {
          role: "user",
          content: `Analyze the following text and provide:
                    1. The sentiment as positive, negative, or neutral.
                    2. A concise summary of the text.
                    
                    Text: "${text}"`,
        },
      ],
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content returned from OpenAI API");
    }

    // Parse the response assuming OpenAI returns a structured output
    const [sentiment, summary] = content
      .split("\n")
      .map((line) => line.split(":")[1]?.trim());

    if (!sentiment || !summary) {
      throw new Error("Unexpected response format from OpenAI");
    }

    return { sentiment, summary };
  } catch (error) {
    console.error("Error analyzing feedback:", error);
    throw new Error("Error analyzing feedback");
  }
};
