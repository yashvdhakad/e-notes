import { connectDB } from "../../../../db/db";
import Note from "../../../../models/noteSchema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const PUT = async (request) => {
    try {
        // TODO: req id/note > find and update > res updated note
        const reqBody = await request.json()
        const id = request.url.split("update/")[1]

        const { title, description, tag } = reqBody;

        const note = await Note.findByIdAndUpdate({ _id: id }, { title, description, tag })
        return NextResponse.json({ message: "Updated successfully", success: true, note });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}