import { connectDB } from "@/app/utils/features"
import { Note } from "../../models/Note"

export const POST = async (req, res) => {
    try {
        connectDB();
        const { title, description, tag } = req.body
        await Note.create({ title, description, tag })
        res.json({ success: true })
    } catch (err) {
        console.log({ error: err.message })
    }
}