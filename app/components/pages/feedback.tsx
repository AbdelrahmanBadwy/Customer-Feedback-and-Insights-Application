import React, { useState } from "react";
import { submitFeedback, fetchFeedbackList } from "../../lib/api";
import FeedbackForm from "../FeedbackForm";
import FeedbackList from "../FeedbackList";
import { Feedback } from "../../types/feedback";
import { motion } from "framer-motion";
const FeedbackPage = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  const handleSubmit = async (text: string) => {
    try {
      const newFeedback = await submitFeedback(text);
      setFeedbackList((prevList) => [
        ...prevList,
        {
          ...newFeedback,
          sentiment: (newFeedback as Feedback).sentiment || null,
          summary: (newFeedback as Feedback).summary || null,
        },
      ]);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const fetchFeedback = async () => {
    try {
      const feedback = await fetchFeedbackList();
      console.log(feedback);
      setFeedbackList(feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };
  React.useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Customer Feedback
        </motion.h1>
        <FeedbackForm onSubmitSuccess={fetchFeedback} />
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <FeedbackList feedbackList={feedbackList} />
        </div>
        {/* add button for the insights page */}
      </div>
    </div>
  );
};

export default FeedbackPage;
