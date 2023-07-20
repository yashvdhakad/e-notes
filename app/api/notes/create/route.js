import { connectDB } from "../../../db/db";
import Note from "../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (request) => {
    try {
        const reqBody = await request.json()
        const note = await Note.create(reqBody)
        return NextResponse.json({message: "Note created successfully", success: true, note});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}