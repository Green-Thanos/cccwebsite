import { NextResponse } from "next/server";
import { Resend } from "resend";

interface SubscribeRequestBody {
  email: string;
}

interface SubscribeResponse {
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: Request,
): Promise<NextResponse<SubscribeResponse>> {
  try {
    const { email } = (await req.json()) as SubscribeRequestBody; // Whats the best way to do these api calls?

    const audienceId = process.env.RESEND_AUDIENCE_ID ?? "";

    if (!audienceId) {
      return NextResponse.json<SubscribeResponse>(
        { message: "Audience ID not found" },
        { status: 500 },
      );
    }
    
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json<SubscribeResponse>(
      { message: "Subscribed successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json<SubscribeResponse>(
      { message: "An error occurred while subscribing" },
      { status: 500 },
    );
  }
}
