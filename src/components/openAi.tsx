"use client";
import React, { useState } from "react";

const OpenAi = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loader visibility
  const [error, setError] = useState(""); // State for error message

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset error message before new request

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
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto w-full px-4 py-8 flex flex-col items-center justify-center h-screen ">
      <form
        onSubmit={handleFormSubmit}
        className="w-full sm:w-4/4 md:w-3/3 lg:w-2/2 xl:w-3/3 bg-white p-8 rounded-lg shadow-md"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full border-0 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 transform hover:scale-105"
          placeholder="Enter your prompt here"
        />
        <button
          type="submit"
          className={`mt-4 w-full p-3 text-white rounded-lg transition-all duration-200 transform hover:scale-105 ${
            isLoading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 mr-2 animate-spin rounded-full bg-white border-2 border-indigo-500"></div>
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
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
  );
};

export default OpenAi;
