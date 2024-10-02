import { deleteImageFromCloudinary } from "@/lib/cloudinary";
import { Image } from "@/schema/images.schema";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request) {
    try {
        const public_id = request.nextUrl.searchParams.get('public_id') || ""
        const result = await deleteImageFromCloudinary({ public_id });

        const delete_image = await Image.findOneAndDelete({ public_id })

        if(delete_image.deletedCount === 0) {
            return NextResponse.json({
                success: true,
                message: "[database]: Image cannot be deleted",
            })
        }

        return NextResponse.json({
            data: result,
            success: true
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}