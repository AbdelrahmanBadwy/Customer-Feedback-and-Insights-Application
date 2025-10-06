"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Customer Feedback & Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Capture, analyze, and gain insights from customer feedback using
            AI-powered sentiment analysis
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <Link
              href="/feedback"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Submit Feedback
            </Link>
            <Link
              href="/insights"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-gray-200 dark:border-gray-700"
            >
              View Insights
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Easy Feedback Collection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simple and intuitive interface for customers to share their
                thoughts
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Automatic sentiment analysis and text summarization using OpenAI
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Visual Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beautiful charts and analytics to understand customer sentiment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
