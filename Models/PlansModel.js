import mongoose from 'mongoose';

const planSchema = mongoose.Schema({
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true
    },
    planName: { type: String, required: true },
    planPrice: { type: Number, required: true },
    planFeatures: [{ type: String }],
    status: { type: String, default: 'active' },
    duration: { type: Number, required: true }
}, { timestamps: true });

const Plan = mongoose.model("plans", planSchema);
export default Plan;
