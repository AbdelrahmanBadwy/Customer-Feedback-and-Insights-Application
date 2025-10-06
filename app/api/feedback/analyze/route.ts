import { NextRequest, NextResponse } from "next/server";
import { analyzeFeedbackAndUpdate } from "../../../lib/api";

export async function POST(request: NextRequest) {
  try {
    const { id, text } = await request.json();
    const analysis = await analyzeFeedbackAndUpdate(id, text);
    return NextResponse.json(analysis, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error analyzing feedback" },
      { status: 500 }
    );
  }
}
