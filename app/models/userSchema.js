import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
        // minLength: [6, "Password is too short"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.models = {};

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;
