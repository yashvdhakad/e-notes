import { connectDB } from "../../../db/db";
import User from "../../../models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connectDB();

export const POST = async (request) => {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "User doesn't exist", success: false });
        }

        // compare password
        const validatePassword = bcryptjs.compare(password, user.password)
        if (!validatePassword) {
            return NextResponse.json({ message: "Invalid Password", success: false });
        }

        // create token data
        const tokenData = {
            id: user_id,
            name: user.name,
            email: user.email
        }
        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        // set cookies
        const response = NextResponse.json({ message: "Login successfully", success: true });
        response.cookies.set("token", token, { httpOnly: true })
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}