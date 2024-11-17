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
    <div>
      <h1>Insights Page</h1>
      <InsightsChart />
    </div>
  );
};

export default InsightsPage;
