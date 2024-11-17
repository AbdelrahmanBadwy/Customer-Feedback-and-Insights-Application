import React, { useState, useEffect } from "react";
import { fetchFeedbackList, analyzeFeedbackAndUpdate } from "../lib/api";
import InsightsChart from "../components/InsightsChart";
import { Feedback } from "../types/feedback";
import "../app/globals.css";
const InsightsPage = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [insightsData, setInsightsData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedback = await fetchFeedbackList();
        setFeedbackList(feedback);

        const insights = feedback.map((feedbackItem) =>
          analyzeFeedbackAndUpdate(feedbackItem.id, feedbackItem.text)
        );
        const result = await Promise.all(insights);
        setInsightsData(result);
      } catch (error) {
        console.error("Error fetching insights:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray flex items-center justify-center text-gray-100 px-4">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Insights Page</h1>
        <InsightsChart />
      </div>
    </div>
  );
};

export default InsightsPage;
