import { connectDB } from "../../../../db/db";
import Note from "../../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const DELETE = async (request) => {
    try {
        const id = request.url.split("delete/")[1];
        const note = await Note.findByIdAndDelete({_id: id})
        return NextResponse.json({message: "Deleted successfully", success: true, note});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}