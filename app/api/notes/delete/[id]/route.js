import { connectDB } from "../../../../db/db";
import Note from "../../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const DELETE = async (request) => {
    try {
        const reqBody = await request.json()
        console.log(request)
        console.log(reqBody)
        const note = await Note.findByIdAndDelete(request.params.id)
        return NextResponse.json({message: "Note Deleted successfully", success: true, note});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}