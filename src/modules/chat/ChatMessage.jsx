import { Avatar, Card, Flex } from "antd";
import { useChatStore } from "@/store/chat.store";
import VocabularyCard from "./VocabularyCard";

function parseVocabulary(content = "") {
  const word =
    content.match(
      /Word:\s*(.*)/i
    )?.[1] || "";

  const definition =
    content.match(
      /Definition:\s*(.*)/i
    )?.[1] || "";

  const example =
    content.match(
      /Example:\s*(.*)/i
    )?.[1] || "";

  const synonym =
    content.match(
      /Synonym:\s*(.*)/i
    )?.[1] || "";

  return {
    word,
    definition,
    example,
    synonym,
  };
}

export default function ChatMessage({
  role,
  content,
}) {
  const isStudent =
    role === "student";

  const mode = useChatStore(
    (state) => state.mode
  );

  const formattedContent =
    content
      ?.replace(
        "Correction:",
        "✅ Correction:\n"
      )
      ?.replace(
        "Explanation:",
        "\n💡 Explanation:\n"
      ) || content;

  const isVocabulary =
    mode === "vocabulary" &&
    role === "teacher";

  if (isVocabulary) {
    const vocabulary =
      parseVocabulary(content);

    if (!vocabulary.word) {
      return null;
    }

    return (
      <Flex
        justify="flex-start"
        style={{
          marginBottom: 12,
        }}
      >
        <Flex
          gap={8}
          align="start"
        >
          <Avatar>
            AI
          </Avatar>

          <VocabularyCard
            {...vocabulary}
          />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      justify={
        isStudent
          ? "flex-end"
          : "flex-start"
      }
      style={{
        marginBottom: 12,
      }}
    >
      <Flex
        gap={8}
        align="start"
        vertical={false}
      >
        {!isStudent && (
          <Avatar>
            AI
          </Avatar>
        )}

        <Card
          size="small"
          style={{
            maxWidth: 600,
          }}
        >
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
            }}
          >
            {formattedContent}
          </pre>
        </Card>

        {isStudent && (
          <Avatar>
            U
          </Avatar>
        )}
      </Flex>
    </Flex>
  );
}