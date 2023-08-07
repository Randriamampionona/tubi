import { CHAT_DATA } from "@/data";
import { NextRequest, NextResponse } from "next/server";

type Context = {
    params: {
        chatID: string
    }
}

export const GET = (_req: NextRequest, { params: { chatID } }: Context) => {
    const filteredChat = CHAT_DATA.find(chat => chat.chatID === chatID)!

    const res: ChatResponse = {
        success: true,
        chat: filteredChat
    }

    return NextResponse.json<ChatResponse>(res, { status: 200 })
}