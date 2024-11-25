import React from "react";
import { motion } from "framer-motion";

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  loading?: boolean;
  className?: string;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  title,
  subtitle,
  loading = false,
  className = "",
}) => {
  return (
    <motion.div
      className={`
        bg-white dark:bg-gray-800 
        rounded-2xl shadow-xl 
        backdrop-blur-lg 
        border border-gray-100 dark:border-gray-700
        p-8 
        max-w-2xl mx-auto
        ${className}
      `}
    >
      {title && (
        <div className="mb-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-6 relative">
          {loading && (
            <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center">
              <div className="animate-pulse text-gray-500 dark:text-gray-400">
                Processing...
              </div>
            </div>
          )}
          {children}
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
