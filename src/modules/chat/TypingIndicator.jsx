import { Card, Spin } from "antd";

export default function TypingIndicator() {
  return (
    <Card size="small">
      <Spin size="small" />
      {" "}Thinking...
    </Card>
  );
}