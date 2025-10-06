"use client";

import React, { useState, useEffect } from "react";
import { fetchFeedbackList, analyzeFeedbackAndUpdate } from "../lib/api";
import InsightsChart from "../components/InsightsChart";
import { Feedback } from "../types/feedback";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-gray-100 px-4 py-12">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Insights Dashboard
        </h1>
        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="/"
            className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/feedback"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Feedback
          </Link>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <InsightsChart />
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
