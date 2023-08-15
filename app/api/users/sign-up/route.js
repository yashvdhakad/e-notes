import { connectDB } from "../../../db/db";
import User from "../../../models/userSchema";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import { sendmail } from '../../../helpers/mailer'

connectDB();

export const POST = async (request) => {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody;

        // check if user already exits
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User already exists", success: false });
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        // create user
        const newUser = await User.create({ name, email, password: hashedPassword });

        // send verification email
        try {
            await sendmail({email, emailType: "VERIFY", userId: newUser._id.toString()})
        } catch (error) {
            console.error(error.message)
        }

        return NextResponse.json({ message: "Sign-up successfully", success: true, newUser });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}