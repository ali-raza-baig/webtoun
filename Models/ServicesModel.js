import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: String,
    description: String,
    images: String,
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

export default Service;
