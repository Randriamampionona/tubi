import { USER_DATA } from "@/data";
import { NextRequest, NextResponse } from "next/server";

type Context = {
    params: { uid: string }
}

export const GET = async (_req: NextRequest, {params: {uid}}: Context) => {
    
    const res: UserResponse = {
        success: true,
        user: USER_DATA.find(u => u.uid === uid)!
    }

    return NextResponse.json<UserResponse>(res, {status: 200})
}