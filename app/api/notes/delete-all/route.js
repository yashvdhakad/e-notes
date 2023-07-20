import { connectDB } from "../../../db/db";
import Note from "../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const DELETE = async (request) => {
    try {
        const note = await Note.deleteMany({})
        return NextResponse.json({message: "All notes deleted successfully", success: true});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}