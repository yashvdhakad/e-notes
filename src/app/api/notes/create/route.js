import { connectDB } from "../../../db/db";
import Note from "../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (request) => {
    try {
        const reqBody = await request.json()
        const { title, description, tag } = reqBody;
        const note = await Note.create({ title, description, tag });
        return NextResponse.json({ message: "Added successfully", success: true, note });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}