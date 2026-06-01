import {
    Card,
    Typography,
    Divider,
} from "antd";

const {
    Title,
    Paragraph,
} = Typography;

export default function StudyPlanCard({
    goal,
    currentLevel,
    weeklySchedule,
    topics,
    exercises,
    milestones,
}) {

    console.log("STUDY PLAN CARD PROPS:");

    console.log({
        goal,
        currentLevel,
        weeklySchedule,
        topics,
        exercises,
        milestones,
    });
    return (
        <Card
            size="small"
            style={{
                maxWidth: 700,
            }}
        >
            <Title level={4}>
                🎯 Goal
            </Title>

            <Paragraph>
                {goal}
            </Paragraph>

            <Divider />

            <Title level={5}>
                📊 Current Level
            </Title>

            <Paragraph>
                {currentLevel}
            </Paragraph>

            <Divider />

            <Title level={5}>
                📅 Weekly Schedule
            </Title>

            <Paragraph
                style={{
                    whiteSpace: "pre-wrap",
                }}
            >
                {weeklySchedule}
            </Paragraph>

            <Divider />

            <Title level={5}>
                📚 Topics
            </Title>

            <Paragraph
                style={{
                    whiteSpace: "pre-wrap",
                }}
            >
                {topics}
            </Paragraph>

            <Divider />

            <Title level={5}>
                ✍️ Exercises
            </Title>

            <Paragraph
                style={{
                    whiteSpace: "pre-wrap",
                }}
            >
                {exercises}
            </Paragraph>

            <Divider />

            <Title level={5}>
                🚀 Milestones
            </Title>

            <Paragraph
                style={{
                    whiteSpace: "pre-wrap",
                }}
            >
                {milestones}
            </Paragraph>
        </Card>
    );
}