import React from 'react';
import { motion } from 'framer-motion';

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  minRows?: number;
  maxRows?: number;
  error?: string;
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  required = false,
  maxLength = 500,
  minRows = 4,
  maxRows = 8,
  error,
  label,
}) => {
  const characterCount = value.length;
  const isNearLimit = characterCount > maxLength * 0.8;
  const isAtLimit = characterCount === maxLength;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          style={{ minHeight: `${minRows * 1.5}rem`, maxHeight: `${maxRows * 1.5}rem` }}
          className={`
            w-full px-4 py-3 
            rounded-xl
            border-2 
            ${error 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
            }
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 
            ${error ? 'focus:ring-red-200' : 'focus:ring-blue-200'}
            transition-all duration-200
            resize-y
          `}
        />
        
        <motion.div 
          className={`text-sm mt-1 text-right ${
            isAtLimit ? 'text-red-500' : 
            isNearLimit ? 'text-yellow-500' : 
            'text-gray-500'
          }`}
        >
          {characterCount}/{maxLength}
        </motion.div>
      </div>
    </div>
  );
};

export default TextArea; 