import { connectDB } from "@/lib/database";
import { Image } from "@/schema/images.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request){ 
    try {
        await connectDB();
        const index = parseInt(request.nextUrl.searchParams.get('index') || "0");
        const quantity = parseInt(request.nextUrl.searchParams.get('quantity') || "10");
        const images = await Image.find().limit(quantity).skip(index).sort({ createdAt: -1 });

        return NextResponse.json({
            success: true, 
            data: images
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, {
            status: 500
        })
    }
}