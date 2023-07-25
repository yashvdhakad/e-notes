import { connectDB } from "../../../db/db";
import User from "../../../models/userSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (request) => {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody;
        const user = await User.create({ name, email, password });
        return NextResponse.json({ message: "Sign-up successfully", success: true, user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}