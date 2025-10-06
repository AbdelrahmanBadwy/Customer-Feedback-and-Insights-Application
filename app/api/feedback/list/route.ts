import { NextRequest, NextResponse } from "next/server";
import { fetchFeedbackList } from "../../../lib/api";

export async function GET(request: NextRequest) {
  try {
    const feedbackList = await fetchFeedbackList();
    return NextResponse.json(feedbackList, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching feedback" },
      { status: 500 }
    );
  }
}
