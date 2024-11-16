import React, { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Alert from "./ui/Alert";
import supabase from "../lib/supabase";
import { analyzeFeedback } from "../lib/openai";

interface FeedbackFormProps {
  onSubmitSuccess: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmitSuccess }) => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");

    try {
      // Analyze feedback using OpenAI
      const analysis = await analyzeFeedback(feedback);
      console.log(analysis);
      onSubmitSuccess();
      // Save feedback in Supabase
      const { data, error } = await supabase
        .from("feedback")
        .insert({ text: feedback })
        .select();
      if (error) throw error;
      await supabase
        .from("feedback")
        .update({ sentiment: analysis.sentiment, summary: analysis.summary })
        .eq("feedbackid", data[0].feedbackid);

      // Call the success callback to refresh the list
      onSubmitSuccess();

      setAlertMessage("Feedback submitted successfully!");
      setFeedback("");
    } catch (error: any) {
      setAlertMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {alertMessage && (
        <Alert
          message={alertMessage}
          type={alertMessage.startsWith("Error") ? "error" : "success"}
        />
      )}
      <Input
        label="Your Feedback"
        placeholder="Enter your feedback"
        value={feedback}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setFeedback(e.target.value)
        }
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  );
};

export default FeedbackForm;
