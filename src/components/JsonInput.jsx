import React, { useState } from "react";

export default function JsonInput({ onJsonChange }) {
  const [value, setValue] = useState("{\n  \"user\": {\"name\": \"Suraj\"}\n}");
  const [error, setError] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleVisualize = () => {
    try {
      const parsed = JSON.parse(value);
      setError("");
      onJsonChange(parsed);
    } catch (err) {
      setError("Invalid JSON format");
      onJsonChange(null);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-2">JSON Input</h2>
      <textarea
        value={value}
        onChange={handleChange}
        rows={16}
        className="border rounded-lg p-2 text-sm font-mono bg-gray-50 dark:bg-gray-700 resize-none"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleVisualize}
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        Visualize
      </button>
    </div>
  );
}
