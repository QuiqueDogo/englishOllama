import { Card } from "antd";

export default function ChatMessage({
  role,
  content,
}) {
  const isStudent = role === "student";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isStudent
          ? "flex-end"
          : "flex-start",
        marginBottom: 12,
      }}
    >
      <Card
        size="small"
        style={{
          maxWidth: "70%",
        }}
      >
        {content}
      </Card>
    </div>
  );
}