import React, { useEffect, useState } from 'react';
import { fetchFeedbackList } from '../lib/api';
import { Feedback } from '../types/feedback';

const InsightsChart: React.FC = () => {
  const [sentimentCounts, setSentimentCounts] = useState<{
    Positive: number;
    Neutral: number;
    Negative: number;
  }>({
    Positive: 0,
    Neutral: 0,
    Negative: 0,
  });

  useEffect(() => {
    const getFeedbackData = async () => {
      try {
        const feedback = await fetchFeedbackList();
        const counts = {
          Positive: 0,
          Neutral: 0,
          Negative: 0,
        };

        feedback.forEach((item: Feedback) => {
          if (item.sentiment && counts[item.sentiment as keyof typeof counts] !== undefined) {
            counts[item.sentiment as keyof typeof counts]++;
          }
        });

        setSentimentCounts(counts);
      } catch (error) {
        console.error('Error fetching feedback data for chart:', error);
      }
    };

    getFeedbackData();
  }, []);

  const maxCount = Math.max(...Object.values(sentimentCounts));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sentiment Distribution</h2>
      <div className="space-y-4">
        {Object.entries(sentimentCounts).map(([sentiment, count]) => (
          <div key={sentiment} className="flex items-center">
            <div className="w-24">{sentiment}</div>
            <div className="flex-1">
              <div
                className={`h-8 rounded ${
                  sentiment === 'Positive'
                    ? 'bg-green-500'
                    : sentiment === 'Neutral'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{
                  width: `${(count / maxCount) * 100}%`,
                  minWidth: count > 0 ? '20px' : '0',
                }}
              />
            </div>
            <div className="w-12 text-right">{count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsChart;
