import { NextRequest, NextResponse } from "next/server";
import { submitFeedback } from "../../lib/api";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();
    const feedback = await submitFeedback(text);
    return NextResponse.json(feedback, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error submitting feedback" },
      { status: 500 }
    );
  }
}
