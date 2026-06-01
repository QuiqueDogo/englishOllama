import { NextResponse } from "next/server";
import { askTeacher } from "@/services/ollama.service";

export async function POST(req) {
  try {
    const { message, history, mode } = await req.json();

    console.log("📩 Message:", message);

    const finalHistory =
      mode === "study-plan"
        ? []
        : history;

    const answer = await askTeacher(
      message,
      finalHistory,
      mode
    );


    console.log("✅ Response generated");

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("❌ ERROR:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}