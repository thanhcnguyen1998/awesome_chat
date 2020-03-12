import mongoose, { Schema } from "mongoose";

let schema = mongoose.schema;

let MessageSchema = new Schema({
    sender: {
        id: String,
        username: String,
        avatar: String
    },
    reciver: {
        id: String,
        username: String,
        avatar: String
    },
    text: String,
    file: {data: Buffer, contentType: String, filename: String},
    createAt: {type: Number, default: Date.now},
    updatedAt: {type: Number, default: null},
    deletedAt: {type: Number, default: null}
});
module.exports = mongoose.model("message", MessageSchema);