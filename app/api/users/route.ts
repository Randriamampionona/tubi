import { USER_DATA as DATA } from "@/data";
import { NextResponse } from "next/server";

export const GET = () => {
    const res: UserListResponse = {
        success: true,
        users: DATA
    }
    
    return NextResponse.json<UserListResponse>(res, {status: 200})
}