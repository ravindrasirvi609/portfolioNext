"use client";
import OpenAi from "@/components/openAi";
import Link from "next/link";
import React from "react";

const Gemini = () => {
  return (
    <div className="bg-black p-4 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-yellow-400 sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          AI Assistant by Ravindra
        </h1>
        <Link
          href={"/"}
          className="bg-blue-500 text-black rounded-lg p-2 hover:bg-blue-700"
        >
          Back To Profile
        </Link>
      </div>
      <div className="w-full mx-auto">
        <OpenAi />
      </div>
    </div>
  );
};

export default Gemini;
