import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a username"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    tag: {
        type: Array,
        required: [true, "Please provide a tag"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Note = mongoose.models.notes || mongoose.model("notes", noteSchema)

export default Note;
