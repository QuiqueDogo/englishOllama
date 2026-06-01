import { Card, Typography, Divider } from "antd";

const { Title, Text } = Typography;

export default function VocabularyCard({
  word,
  definition,
  example,
  synonym,
}) {
  return (
    <Card
      size="small"
      style={{
        maxWidth: 600,
      }}
    >
      <Title level={4}>
        {word}
      </Title>

      <Divider />

      <Title level={5}>
        Definition
      </Title>

      <Text>
        {definition}
      </Text>

      <Divider />

      <Title level={5}>
        Example
      </Title>

      <Text italic>
        {example}
      </Text>

      <Divider />

      <Title level={5}>
        Synonym
      </Title>

      <Text>
        {synonym}
      </Text>
    </Card>
  );
}