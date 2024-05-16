"use client";
import OpenAi from "@/components/openAi";
import React from "react";

const Gemini = () => {
  return (
    <div className="bg-black p-4 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center flex justify-center items-center">
        Test this Chat-Bot
      </h1>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
        <OpenAi />
      </div>
    </div>
  );
};

export default Gemini;
