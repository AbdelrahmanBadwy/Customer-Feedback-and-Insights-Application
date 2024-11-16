import React, { useState } from "react";
import { submitFeedback, fetchFeedbackList } from "../lib/api";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import { Feedback } from "../types/feedback";

const FeedbackPage = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  const handleSubmit = async (text: string) => {
    try {
      const newFeedback = await submitFeedback(text);
      setFeedbackList((prevList) => [
        ...prevList,
        { ...newFeedback, sentiment: (newFeedback as Feedback).sentiment || null, summary: (newFeedback as Feedback).summary || null }
      ]);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const fetchFeedback = async () => {
    try {
      const feedback = await fetchFeedbackList();
      setFeedbackList(feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  React.useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div>
      <h1>Feedback</h1>
      <FeedbackForm onSubmitSuccess={fetchFeedback} />
      <FeedbackList feedbackList={feedbackList} />
    </div>
  );
};

export default FeedbackPage;
