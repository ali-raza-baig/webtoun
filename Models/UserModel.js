import mongoose from 'mongoose';

// Define the schema for the user model
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: Number,
            default: 0,
        },
        // activePlan: [
        //     {
        //         planId: {
        //             type: mongoose.ObjectId,
        //             ref: 'Plan',
        //             required: true,
        //         },
        //         status: {
        //             type: String,
        //             enum: ['active', 'inactive', 'deleted', 'completed'],
        //             default: 'active'
        //         },

        //         startDate: {
        //             type: Date,
        //             default: Date.now,
        //         },
        //         endDate: {
        //             type: Date,
        //             required: true,
        //         }
        //     }
        // ],
        resetPasswordToken: String,
        resetPasswordExpiresAt: Date,
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// Export the model
const User = mongoose.model('User', userSchema);

export default User;
