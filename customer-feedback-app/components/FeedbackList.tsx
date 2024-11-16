import React, { useEffect, useState } from 'react';
import supabase from '../lib/supabase';
import Table from './ui/Table';
import { Feedback } from "../types/feedback";

interface FeedbackListProps {
  feedbackList: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackList }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [feedbackList]);

  return (
    <div>
      {loading ? (
        <p>Loading feedback...</p>
      ) : (
        <Table
          columns={['Feedback', 'Sentiment', 'Summary']}
          data={feedbackList.map((f) => ({
            Feedback: f.text,
            Sentiment: f.sentiment,
            Summary: f.summary,
          }))}
        />
      )}
    </div>
  );
};

export default FeedbackList;
