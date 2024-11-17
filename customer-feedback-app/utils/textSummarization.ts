import { openai } from "../lib/openai";

export const summarizeText = async (text: string): Promise<string> => {
  try {
    const prompt = `Summarize the following text in one sentence:\n\n"${text}"`;
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Specify the OpenAI model
      messages: [{ role: "user", content: prompt }], // Use the prompt in a chat format
      max_tokens: 50,
    });

    const summary = response.choices[0]?.message?.content?.trim();
    return summary || "No summary available.";
  } catch (error) {
    console.error("Error summarizing text:", error);
    throw new Error("Failed to summarize text.");
  }
};
