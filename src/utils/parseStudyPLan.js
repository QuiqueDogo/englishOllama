export function parseStudyPlan(content) {
    const sections = {};

    const regex =
        /(Goal|Current Level|Weekly Schedule|Topics|Exercises|Milestones):([\s\S]*?)(?=\n[A-Z][A-Za-z ]+:|$)/g;

    let match;

    while ((match = regex.exec(content))) {
        sections[match[1]] =
            match[2].trim();
    }

    return {
        goal: sections["Goal"] || "",
        currentLevel:
            sections["Current Level"] || "",
        weeklySchedule:
            sections["Weekly Schedule"] || "",
        topics:
            sections["Topics"] || "",
        exercises:
            sections["Exercises"] || "",
        milestones:
            sections["Milestones"] || "",
    };
}