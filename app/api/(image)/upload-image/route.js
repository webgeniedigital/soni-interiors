import { uploadToCloudinary } from "@/utils/cloudinary";
import { NextResponse } from "next/server";
import { Image } from "@/schema/image.model";
import { connectDB } from "@/utils/database";

export async function POST(request) {
  try {
    const body = await request.formData();
    const image = body.get("image");
    console.log(image)
    const data = await uploadToCloudinary({
      file: image,
      folder: "kp-interiors/images/",
    });

    await connectDB();

    const new_image =
      data &&
      (await Image.create({
        secure_url: data.secure_url,
        public_id: data.public_id,
      }));

    if (!new_image) {
      return NextResponse.json(
        { success: false, message: "Image upload failed to DB failed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Image Uploaded Successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
