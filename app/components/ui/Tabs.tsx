import React, { useState } from "react";

type Tab = {
  title: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs, className = "" }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
