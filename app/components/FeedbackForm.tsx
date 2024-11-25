import React, { useState } from "react";
import Form from "./ui/Form";
import Button from "./ui/Button";
import Alert from "./ui/Alert";
import { submitFeedback, analyzeFeedbackAndUpdate } from "../lib/api";
import { motion } from "framer-motion";

interface FeedbackFormProps {
  onSubmitSuccess: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmitSuccess }) => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");

    try {
      console.log(feedback);
      // First submit the feedback to get the ID
      const { id, text } = await submitFeedback(feedback);

      // Then analyze the feedback and update the database
      await analyzeFeedbackAndUpdate(id, text);
      console.log(text);
      await onSubmitSuccess();
      setAlertMessage("Feedback submitted successfully!");
      setFeedback("");
    } catch (error: any) {
      setAlertMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} title="Share Your Feedback" loading={loading}>
      {alertMessage && (
        <motion.div>
          <Alert
            message={alertMessage}
            type={alertMessage.startsWith("Error") ? "error" : "success"}
          />
        </motion.div>
      )}
      <div className="space-y-2">
        <textarea
          value={feedback}
          onChange={handleChange}
          placeholder="Enter your feedback here..."
          required
          maxLength={500}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
           focus:ring-2 focus:ring-blue-500 focus:border-transparent
           bg-white dark:bg-gray-700
           text-gray-900 dark:text-gray-100
           placeholder-gray-400 dark:placeholder-gray-500
           transition-all duration-200
           min-h-[120px] resize-y"
        />
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {feedback.length}/500 characters
        </div>
      </div>
      <Button
        type="submit"
        disabled={loading || feedback.length === 0}
        loading={loading}
        className="w-full sm:w-auto"
      >
        Submit Feedback
      </Button>
    </Form>
  );
};

export default FeedbackForm;
