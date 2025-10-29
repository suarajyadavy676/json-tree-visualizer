import React from "react";

export default function SearchBar({ setSearchQuery }) {
  return (
    <div className="mb-3 flex gap-2 text-black">
      <input
        type="text"
        placeholder="Search by JSON path (e.g. $.user.name)"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border rounded-lg p-2 text-sm"
      />
    </div>
  );
}
