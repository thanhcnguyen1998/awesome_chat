import mongoose, { Schema } from "mongoose";

let schema = mongoose.schema;

let NotificationSchema = new Schema({
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
    type: String,
    content: String,
    isRead: {type: Boolean, default: false},
    createAt: {type: Number, default: Date.now},
});
module.exports = mongoose.model("notification", NotificationSchema);