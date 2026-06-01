"use client";
import {
  useEffect,
  useRef,
} from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { Button } from "antd";
import ModeSelector from "./ModeSelector";


import { useChatStore } from "@/store/chat.store";
import ChatHeader from "./ChatHeader";
import TypingIndicator from "./TypingIndicator";

export default function ChatView() {
  const {
    messages,
    loading,
    addMessage,
    setLoading,
    mode,
  } = useChatStore();
  const bottomRef = useRef(null);

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
    ].slice(-10);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        history,
        mode,
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

  useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages.length, loading]);

  return (
    <>
      <div >
        <ChatHeader />
        <ModeSelector />

<br />
<br />
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
  <TypingIndicator />
)}
<div ref={bottomRef} />
      </div>

      <ChatInput onSend={sendMessage} />
    </>
  );
}