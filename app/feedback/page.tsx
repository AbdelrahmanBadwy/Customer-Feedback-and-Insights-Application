"use client";

import React, { useState } from "react";
import { submitFeedback, fetchFeedbackList } from "../lib/api";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import { Feedback } from "../types/feedback";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="/"
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/insights"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Insights
          </Link>
        </div>
        <FeedbackForm onSubmitSuccess={fetchFeedback} />
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <FeedbackList feedbackList={feedbackList} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
