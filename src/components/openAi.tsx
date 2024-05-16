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
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-red-500"
          placeholder="Enter your prompt here"
        />
        <button
          type="submit"
          className={`mt-4 px-4 py-2 bg-red-500 text-white rounded-lg ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 mr-2 animate-spin rounded-full bg-white border-2 border-red-500"></div>
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <div className="mt-8 text-black" style={{ whiteSpace: "pre-line" }}>
        {output}
      </div>
    </div>
  );
};

export default OpenAi;
