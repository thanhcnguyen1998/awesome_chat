import mongoose, { Schema } from "mongoose";

let schema = mongoose.schema;

let ContactSchema = new Schema({
    userId: String,
    contactId: String,
    status: {type: Boolean, default: null},
    createAt: {type: Number, default: Date.now},
    updatedAt: {type: Number, default: null},
    deletedAt: {type: Number, default: null}
});
module.exports = mongoose.model("contact", ContactSchema);