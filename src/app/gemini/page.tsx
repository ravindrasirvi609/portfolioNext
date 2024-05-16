"use client";
import OpenAi from "@/components/openAi";
import React from "react";

const Gemini = () => {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold">Welcome to my page!</h1>
      <p className="text-gray-700 mt-2">
        <div>
          <OpenAi />
        </div>
      </p>
    </div>
  );
};

export default Gemini;
