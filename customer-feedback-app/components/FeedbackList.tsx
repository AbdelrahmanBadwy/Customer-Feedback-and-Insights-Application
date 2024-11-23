import React, { useEffect, useState } from "react";
import Table from "./ui/Table";
import { Feedback } from "../types/feedback";
import { motion } from "framer-motion";

interface FeedbackListProps {
  feedbackList: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackList }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [feedbackList]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-gray-500 dark:text-gray-400">
            Loading feedback...
          </div>
        </div>
      ) : feedbackList.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No feedback submitted yet
        </div>
      ) : (
        <Table
          columns={["Feedback", "Sentiment", "Summary"]}
          data={feedbackList.map((f) => ({
            Feedback: f.text,
            Sentiment: f.sentiment,
            Summary: f.summary,
          }))}
        />
      )}
    </motion.div>
  );
};

export default FeedbackList;
