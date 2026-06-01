"use client";

import { Input, Button } from "antd";
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
      }}
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSend}
        placeholder="Type a sentence..."
      />

      <Button
        type="primary"
        onClick={handleSend}
      >
        Send
      </Button>
      <Button>
  🎤
</Button>
    </div>
  );
}