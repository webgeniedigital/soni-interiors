import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema({
    secure_url: {type: String},
    public_id: {type: String}, 
}, {timestamps: true})

export const Image = models?.Image || model('Image', ImageSchema)