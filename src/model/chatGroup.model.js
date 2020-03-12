import mongoose, { Schema } from "mongoose";

let schema = mongoose.schema;

let ChatGroupSchema = new Schema({
    name: String,
    userAmount: {type: Number, min: 3, max: 177},
    messageAmount: {type: Number, default: 0},
    userId: String,
    members: [
        {userId: String}
    ],
    createAt: {type: Number, default: Date.now},
    updatedAt: {type: Number, default: null},
    deletedAt: {type: Number, default: null}
});
module.exports = mongoose.model("chat-group", ChatGroupSchema);