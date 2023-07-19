import { connectDB } from "@/app/utils/features"
import { Note } from "../../models/Note"

export const GET = async (req, res) => {
    try {
        await connectDB();
        const notes = await Note.find({ })
        res.json({ success: true })
    } catch (err) {
        console.log({ error: err.message })
    }
}