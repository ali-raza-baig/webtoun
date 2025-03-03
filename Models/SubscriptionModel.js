import mongoose from "mongoose";

const Subscriptionschema = mongoose.Schema({
    userId: {
        type: mongoose.ObjectId,
        ref: "User",
        required: true
    },
    planId: {
        type: mongoose.ObjectId,
        ref: "Plan",
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'deleted', 'completed'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true,
    }
})

const Subscription = mongoose.model("Subscription", Subscriptionschema)

export default Subscription;