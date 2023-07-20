import { connectDB } from "../../../db/db";
import Note from "../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const GET = async (request) => {
    try {
        const note = await Note.find({})
        return NextResponse.json({message: "Notes loaded successfully", success: true, note});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}