import React from "react";
import Icon from "./Icon";

const Tabs = ({ tabs, activeTabId, setActiveTabId }) => {
  return (
    <div className="w-full border-b border-gray-200 mb-5">
      <ul className="flex text-sm font-medium text-center text-gray-500">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-2">
            <a
              onClick={() => setActiveTabId(tab.id)}
              className={`group cursor-pointer inline-flex p-4 rounded-t-lg ${
                tab.id === activeTabId
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              <Icon
                className={`w-5 h-5 mr-2 ${
                  tab.id === activeTabId
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500"
                }`}
                type={tab.iconType}
              />
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
