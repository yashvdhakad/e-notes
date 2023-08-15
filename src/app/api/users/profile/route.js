import { getDataFromToken } from '../../../helpers/getDataFromToken'
import { NextRequest, NextResponse } from 'next/server'
import User from '../../../models/userSchema'
import { connectDB } from "../../../db/db";

connectDB();

export const GET = async (request) => {
    try {
        const userID = await getDataFromToken(request)
        const user = await User.findOne({ _id: userID }).select("-password");
        return NextResponse.json({ message: "User founds", success: true, user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}