import supabase from "./supabase";
import { analyzeFeedback } from "./openai"; // Assuming analyzeFeedback is defined in openai.ts

/**
 * Define the expected structure of feedback entries from the database.
 */
interface FeedbackEntry {
  feedbackId: string;
  text: string;
  sentiment: string | null;
  summary: string | null;
}

/**
 * Submit feedback to the database.
 * @param {string} text - The feedback text.
 * @returns {Promise<{ id: string; text: string }>} - The saved feedback entry.
 */
export const submitFeedback = async (
  text: string
): Promise<{ id: string; text: string }> => {
  const { data, error } = await supabase
    .from("feedback")
    .insert({ text })
    .select("feedbackid, text")
    .single();

  if (error) {
    console.error("Error submitting feedback:", error);
    throw new Error("Failed to submit feedback.");
  }

  return { id: data.feedbackid, text: data.text };
};

/**
 * Fetch a list of all feedback entries.
 * @returns {Promise<Array<{ id: string; text: string; sentiment: string | null; summary: string | null }>>}
 */
export const fetchFeedbackList = async (): Promise<
  Array<{
    id: string;
    text: string;
    sentiment: string | null;
    summary: string | null;
  }>
> => {
  const { data, error } = await supabase
    .from("feedback")
    .select("feedbackid:feedbackid, text, sentiment, summary");

  if (error) {
    console.error("Error fetching feedback list:", error);
    throw new Error("Failed to fetch feedback list.");
  }

  // Safely map the data and handle potential null values
  return data.map(
    (entry: {
      feedbackid: string;
      text: string;
      sentiment: string | null;
      summary: string | null;
    }) => ({
      id: entry.feedbackid,
      text: entry.text,
      sentiment: entry.sentiment ?? "Unknown",
      summary: entry.summary ?? "No summary available",
    })
  );
};

/**
 * Analyze feedback using OpenAI and update the database.
 * @param {string} id - Feedback ID.
 * @param {string} text - Feedback text.
 * @returns {Promise<{ sentiment: string; summary: string }>} - Analysis results.
 */
export const analyzeFeedbackAndUpdate = async (
  id: string,
  text: string
): Promise<{ sentiment: string; summary: string }> => {
  try {
    // Perform sentiment analysis and summarization
    const { sentiment, summary } = await analyzeFeedback(text);

    // Update the feedback entry with the analysis results
    const { error } = await supabase
      .from("feedback")
      .update({ sentiment, summary })
      .eq("feedbackid", id);

    if (error) {
      console.error("Error updating feedback:", error);
      throw new Error("Failed to update feedback.");
    }
    console.log("Feedback ########:", { sentiment, summary });
    return { sentiment, summary };
  } catch (error) {
    console.error("Error analyzing feedback:", error);
    throw new Error(
      error instanceof Error
        ? `Error analyzing feedback: ${error.message}`
        : "Unknown error"
    );
  }
};
