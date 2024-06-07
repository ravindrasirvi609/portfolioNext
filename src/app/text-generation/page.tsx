"use client";
import { PlaceholdersAndVanishInput } from "@/components/placeholders-and-vanish-input";
import Link from "next/link";
import React, { useState } from "react";

const Gemini = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loader visibility
  const [error, setError] = useState(""); // State for error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when starting the request
    try {
      const response = await fetch("/api/chatBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error("An error occurred while fetching data");
      }

      const data = await response.json();
      setOutput(data.text);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
    console.log("submitted");
  };

  return (
    <div className="bg-black p-4 w-full">
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className="bg-blue-500 text-black rounded-lg p-2 hover:bg-blue-700"
        >
          Back To Profile
        </Link>
      </div>

      <div className="h-[40rem] flex flex-col justify-center items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-yellow-400">
          Ask AI Assistant Anything
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
        {error && (
          <div>
            <p className="text-red-500 bg-yellow-400">{error}</p>
          </div>
        )}
        <div
          className="mt-8 text-white w-full text-center"
          style={{ whiteSpace: "pre-line" }}
        >
          {output}
        </div>
      </div>
    </div>
  );
};

export default Gemini;
