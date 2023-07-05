import { connectDB } from "@/app/utils/features"
import noteSchema from "../../models/note"

export const POST = async (req, res) => {
    try {
        await connectDB();

        const { title, description, tag } = req.body

        await noteSchema.create({
            title, description, tag
        })
        res.json({ success: true })
    } catch (err) {
        console.log({ error: err.message })
    }
}