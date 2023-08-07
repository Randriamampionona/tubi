import { CHAT_DATA } from "@/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = (_req: NextRequest) => {
    const res: ChatListResponse = {
        success: true,
        chats: CHAT_DATA
    }

    return NextResponse.json<ChatListResponse>(res, {status: 200})
}