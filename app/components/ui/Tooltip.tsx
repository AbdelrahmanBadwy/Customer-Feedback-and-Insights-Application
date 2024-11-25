import React, { useState } from "react";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
};

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = "top",
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  const positionStyles = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute ${positionStyles[placement]} bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-10`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
