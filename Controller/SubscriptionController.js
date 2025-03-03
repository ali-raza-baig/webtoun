import Subscription from '../Models/SubscriptionModel.js';

export const createSubscriptionController = async (req, res) => {
    try {
        const { planId, endDate } = req.body;
        const userId = req.userId;

        if (!planId || !endDate) {
            return res.status(400).json({ error: "Missing required parameters" });
        }

        const subscriptionExist = await Subscription.findOne({ planId, userId });

        if (subscriptionExist) {
            subscriptionExist.endDate = new Date(subscriptionExist.endDate.getTime() + endDate * 24 * 60 * 60 * 1000);
            await subscriptionExist.save();

            return res.status(200).json({
                message: "Plan renewed successfully.",
                subscription: subscriptionExist,
            });
        }

        const newSubscription = new Subscription({
            userId,
            planId,
            endDate: new Date(Date.now() + endDate * 24 * 60 * 60 * 1000),
        });

        await newSubscription.save();
        res.status(201).json({
            message: "Plan purchased successfully",
            subscription: newSubscription,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllSubscriptionController = async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json({
            message: "All Subscriptions",
            subscriptions,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get subscriptions by user ID
export const getSubscriptionByUserIdController = async (req, res) => {
    try {
        const userId = req.userId;
        const subscriptions = await Subscription.find({ userId });

        res.status(200).json({
            message: "All subscriptions of user",
            subscriptions,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get subscriptions by plan ID
export const getSubscriptionByPlanIdController = async (req, res) => {
    try {
        const planId = req.params.planId;
        const subscriptions = await Subscription.find({ planId });

        res.status(200).json({
            message: "All subscriptions of plan",
            subscriptions,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update subscription status
export const updateSubscriptionStatusController = async (req, res) => {
    try {
        const { status } = req.body;
        const subscriptionId = req.params.id;

        if (!subscriptionId || !status) {
            return res.status(400).json({ error: "Missing required parameters" });
        }

        const subscription = await Subscription.findByIdAndUpdate(subscriptionId, { status }, { new: true });

        if (!subscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        res.status(200).json({
            message: "Subscription status updated successfully",
            subscription,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete subscription
export const deleteSubscriptionController = async (req, res) => {
    try {
        const subscriptionId = req.params.id;

        if (!subscriptionId) {
            return res.status(400).json({ error: "Missing required parameters" });
        }

        const subscription = await Subscription.findByIdAndDelete(subscriptionId);

        if (!subscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        res.status(200).json({
            message: "Subscription deleted successfully",
            subscription,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
