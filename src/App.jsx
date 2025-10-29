import React, { useState, useEffect } from "react";
import JsonInput from "./components/JsonInput";
import SearchBar from "./components/SearchBar";
import TreeVisualizer from "./components/TreeVisualizer";

export default function App() {
  const [jsonData, setJsonData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Update Tailwind theme on toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 transition-colors">
      {/* Header with toggle */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          JSON Tree Visualizer
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-lg transition hover:opacity-80"
        >
          <span className="text-sm font-medium">
            {darkMode ? "Light" : "Dark"}/Mode
          </span>
          <span
            className={`w-4 h-4 rounded-full ${
              darkMode ? "bg-yellow-400" : "bg-gray-800"
            }`}
          ></span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <JsonInput onJsonChange={setJsonData} />
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transition">
          <SearchBar setSearchQuery={setSearchQuery} />
          <TreeVisualizer data={jsonData} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}
