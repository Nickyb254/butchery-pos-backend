import mongoose  from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ImageSchema = new mongoose.Schema({
    // _id: { type: String, default: uuidv4, required: true },
    imagez:  String
})

const ImageModel = mongoose.model('Images', ImageSchema);
export default ImageModel