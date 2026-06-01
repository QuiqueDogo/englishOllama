import { AI_CONFIG } from "@/config/ai.config";
import { teacherPrompt } from "@/prompts/teacher.prompt";

export async function askTeacher(message, history = []) {

  const ollamaMessages = [
  {
    role: "system",
    content: teacherPrompt,
  },
  ...history.map((msg) => ({
    role: msg.role === "student"
      ? "user"
      : "assistant",
    content: msg.content,
  })),
];

console.log("MESSAGES SENT TO OLLAMA:");
console.dir(ollamaMessages, { depth: null });

  const response = await fetch(
    "http://localhost:11434/api/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  model: AI_CONFIG.model,
  stream: false,
  options: {
    temperature: AI_CONFIG.temperature,
    top_p: AI_CONFIG.top_p,
    num_predict: AI_CONFIG.num_predict,
  },    
  messages: ollamaMessages,
//   messages: [
//   {
//     role: "user",
//     content: "My name is luis",
//   },
// ],
}),
    }
  );

//   const data = await response.json();


// return data.message.content;
  console.log("Status:", response.status);

  const data = await response.json();
  console.log("OLLAMA RESPONSE:");
console.dir(data, { depth: null });
console.log("DONE REASON:");
console.log(data.done_reason);

console.log("EVAL COUNT:");
console.log(data.eval_count);


 console.log("CONTENT:");
console.log(data.message?.content);

console.log("THINKING:");
console.log(data.message?.thinking);

return data.message?.content || "[EMPTY RESPONSE]";
}