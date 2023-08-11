import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please fill your name"],
    },
    email: {
        type: String,
        required: [true, "Please fill your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please create a strong password"],
        select: false,
        minLength: [6, "Password is too short"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.models = {};

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;
