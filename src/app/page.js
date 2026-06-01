import ChatSidebar from "@/modules/chat/ChatSidebar";
import ChatView from "@/modules/chat/ChatView";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 24,
      }}
    >
<Row>
  <Col span={6}>
    <ChatSidebar />
  </Col>

  <Col span={18}>
    <ChatView />
  </Col>
</Row>
    </main>
  );
}