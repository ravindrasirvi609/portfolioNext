"use client";
import ChatBotHistory from "@/components/chatBotHistory";
import React from "react";

import VisitorList from "@/components/visitorList";

const PromptHistory = () => {
  return (
    <>
      <div>
        <ChatBotHistory />
      </div>
      <div>
        <VisitorList />
      </div>
    </>
  );
};

export default PromptHistory;
