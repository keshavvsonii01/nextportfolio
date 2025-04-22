import connectDB from "@/lib/db";
import Details from "@/models/details";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email, details } = await request.json();

    try {
        await connectDB();
        const newDetails = new Details({ name, email, details });
        await newDetails.save();
        return NextResponse.json({ message: "Details saved successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to save details" }, { status: 500 });
    }
}