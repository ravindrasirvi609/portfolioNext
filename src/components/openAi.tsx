import React, { useState } from "react";

const OpenAi = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loader visibility

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/chatBot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    setOutput(data.text);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
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
      <div
        className="mt-8 text-white w-full max-w-md text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {output}
      </div>
    </div>
  );
};

export default OpenAi;
