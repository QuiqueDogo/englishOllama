"use client";

import { Segmented } from "antd";
import { useChatStore } from "@/store/chat.store";

export default function ModeSelector() {
  const mode = useChatStore(
    (state) => state.mode
  );

  const setMode = useChatStore(
    (state) => state.setMode
  );

  return (
    <Segmented
      block
      value={mode}
      onChange={setMode}
      options={[
        {
          label: "Grammar",
          value: "grammar",
        },
        {
          label: "Conversation",
          value: "conversation",
        },
        {
          label: "Vocabulary",
          value: "vocabulary",
        },
        {
          label: "Study Plan",
          value: "study-plan",
        },
      ]}
    />
  );
}