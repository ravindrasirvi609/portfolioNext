"use clinet";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatBotHistory: React.FC = () => {
  const [chatBotList, setChatBotList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/chatBotList");
        console.log("Chat bot history response:", response.data.promptList);

        setChatBotList(response.data.promptList);
      } catch (error) {
        console.error("Error fetching chat bot history:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.isArray(chatBotList) &&
        chatBotList.map((item: any, index: number) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <p className="text-gray-700">Prompt: {item.prompt}</p>
            <p className="text-gray-700" style={{ whiteSpace: "pre-line" }}>
              output: {item.output}
            </p>
            <p className="text-red-600">
              Created At: {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ChatBotHistory;
