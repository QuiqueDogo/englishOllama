import ChatView from "@/modules/chat/ChatView";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 24,
      }}
    >
      <h1>
        English
      </h1>

      <ChatView />
    </main>
  );
}