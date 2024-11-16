import React from "react";

type AlertProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose?: () => void;
  className?: string;
};

const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  onClose,
  className = "",
}) => {
  const typeStyles = {
    success: "bg-green-100 text-green-700 border-green-500",
    error: "bg-red-100 text-red-700 border-red-500",
    info: "bg-blue-100 text-blue-700 border-blue-500",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border rounded ${typeStyles[type]} ${className}`}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-lg font-bold focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
