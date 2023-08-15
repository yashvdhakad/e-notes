import { connectDB } from '../../../db/db'
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../models/userSchema'

connectDB();

export const POST = async (request) => {
    try {
        const reqBody = await request.json()
        const { token } = reqBody;

        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })

        if (!user) {
            return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({ message: "Email verified successfully", success: true })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}