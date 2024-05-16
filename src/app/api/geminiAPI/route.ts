import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = input;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return NextResponse.json({ text });
  } catch (error) {
    console.error("Error in POST:", error);
    return NextResponse.error();
  }
}
