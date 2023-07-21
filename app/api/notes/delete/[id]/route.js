import { connectDB } from "../../../../db/db";
import Note from "../../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const DELETE = async (request) => {
    try {
        const id = request.url.split("delete/")[1];
        console.log(id)
        const note = await Note.findByIdAndDelete({_id: id})
        console.log(note)
        return NextResponse.json({message: "Note Deleted successfully", success: true, note});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}