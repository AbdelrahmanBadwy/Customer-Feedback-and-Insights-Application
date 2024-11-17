import React, { useState } from "react";
import Form from "./ui/Form";
import Button from "./ui/Button";
import Alert from "./ui/Alert";
import { analyzeFeedback } from "../lib/openai";
import { motion } from "framer-motion";

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
      const analysis = await analyzeFeedback(feedback);
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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <Alert
            message={alertMessage}
            type={alertMessage.startsWith("Error") ? "error" : "success"}
          />
        </motion.div>
      )}
      <div className="space-y-2">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   bg-white dark:bg-gray-700
                   text-gray-900 dark:text-gray-100
                   placeholder-gray-400 dark:placeholder-gray-500
                   transition-all duration-200
                   min-h-[120px] resize-y"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {feedback.length}/500 characters
        </motion.div>
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
