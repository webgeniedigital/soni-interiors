import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadToCloudinary({ file, folder }) {
    try {
        const buffer = await file.arrayBuffer();
        const bytes = Buffer.from(buffer);

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({
                resource_type: 'image',
                folder,
            }, (error, result) => {
                if (error) {
                    reject(error.message);
                } else {
                    resolve(result);
                }
            });

            uploadStream.end(bytes);
        });
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}
export async function deleteImageFromCloudinary({ public_id }) {
    return new Promise(async (resolve, reject) => {
        try {
            cloudinary.uploader.destroy(public_id, (error, result) => {
                if (error) {
                    return reject(error.message);
                } else {
                    return resolve(result);
                }
            })
        } catch (error) {
            reject(new Error(error.message))
        }
    });
}
