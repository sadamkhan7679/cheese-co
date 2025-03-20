"use client";

import type React from "react";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

type Suggestion = {
  id: string;
  text: string;
};

type Recommendation = {
  id: string;
  text: string;
  icon: React.ReactNode;
};

export default function SearchDropdown({
  query,
  onClose,
}: {
  query: string;
  onClose?: () => void;
}) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    { id: "1", text: "Cheese" },
    { id: "2", text: "Cheddar" },
    { id: "3", text: "Charcuterie" },
  ]);

  const recommendations = [
    {
      id: "1",
      text: "Best Seller",
      icon: <span className="text-amber-500">⭐</span>,
    },
    { id: "2", text: "Cheese", icon: <span>🧀</span> },
    { id: "3", text: "Charcuterie", icon: <span>🥓</span> },
    { id: "4", text: "Specialty Foods", icon: <span>🍽️</span> },
    { id: "5", text: "Housewares & Accessories", icon: <span>🏠</span> },
    { id: "6", text: "Gift Box", icon: <span>🎁</span> },
  ];

  // Filter suggestions based on query
  useEffect(() => {
    if (query) {
      const allSuggestions = [
        { id: "1", text: "Cheese" },
        { id: "2", text: "Cheddar" },
        { id: "3", text: "Charcuterie" },
        { id: "4", text: "Gouda" },
        { id: "5", text: "Brie" },
        { id: "6", text: "Camembert" },
        { id: "7", text: "Blue Cheese" },
        { id: "8", text: "Feta" },
        { id: "9", text: "Mozzarella" },
        { id: "10", text: "Parmesan" },
      ];

      const filtered = allSuggestions.filter((item) =>
        item.text.toLowerCase().includes(query.toLowerCase()),
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
    } else {
      setSuggestions([
        { id: "1", text: "Cheese" },
        { id: "2", text: "Cheddar" },
        { id: "3", text: "Charcuterie" },
      ]);
    }
  }, [query]);

  return (
    <div className="w-full bg-white rounded-md overflow-hidden divide-y divide-gray-100">
      {/* Suggestions */}
      <div>
        <div className="px-4 py-3 text-gray-500 font-medium text-sm">
          Suggestions
        </div>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              <span className="text-gray-700">{suggestion.text}</span>
              <ArrowUpRight className="h-5 w-5 text-gray-400" />
            </button>
          ))
        ) : (
          <div className="px-4 py-3 text-gray-500 text-sm">
            No suggestions found for "{query}"
          </div>
        )}
      </div>

      {/* Recommended */}
      <div>
        <div className="px-4 py-3 text-gray-500 font-medium text-sm">
          Recommended
        </div>
        {recommendations.map((recommendation) => (
          <button
            key={recommendation.id}
            className="flex items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            <span className="mr-3 text-xl flex items-center justify-center w-6 h-6">
              {recommendation.icon}
            </span>
            <span className="text-gray-700">{recommendation.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
