import React from "react";

type SpinnerProps = {
  size?: "small" | "medium" | "large";
  color?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "blue-600",
}) => {
  const sizes = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  return (
    <div
      className={`${sizes[size]} border-4 border-t-transparent border-${color} rounded-full animate-spin`}
    ></div>
  );
};

export default Spinner;
