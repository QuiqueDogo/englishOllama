"use client";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { Button } from "antd";

import { useChatStore } from "@/store/chat.store";

export default function ChatView() {
  const {
    messages,
    loading,
    addMessage,
    setLoading,
  } = useChatStore();

const sendMessage = async (message) => {
  const userMessage = {
    role: "student",
    content: message,
  };

  addMessage(userMessage);

  setLoading(true);

  try {
    const history = [
      ...messages,
      userMessage,
    ];

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    const data = await response.json();
addMessage({
  role: "teacher",
  content: data.answer || "No response generated",
});
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  const clearChat = useChatStore(
    (state) => state.clearChat
  );

  return (
    <>
      <div>
        <Button onClick={clearChat}>
          New Chat
        </Button>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            {...message}
          />
        ))}

        {loading && (
          <ChatMessage
            role="teacher"
            content="Typing..."
          />
        )}
      </div>

      <ChatInput onSend={sendMessage} />
    </>
  );
}