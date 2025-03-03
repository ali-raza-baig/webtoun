import Plan from '../Models/PlansModel.js';

// ✅ Create a new plan
export const createPlanController = async (req, res) => {
    try {
        const { service, planName, planPrice, planFeatures, duration } = req.body;

        if (!service || !planName || !planPrice || !planFeatures) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        // Convert comma-separated string to an array
        const featuresArray = planFeatures.split(",").map(feature => feature.trim());

        const newPlan = new Plan({
            service,
            planName,
            planPrice,
            planFeatures: featuresArray,
            duration
        });

        await newPlan.save();

        res.status(201).json({ success: true, message: "Plan created successfully!", plan: newPlan });
    } catch (error) {
        console.error("Error creating plan:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Get all plans
export const getAllPlansController = async (req, res) => {
    try {
        const plans = await Plan.find().populate("service", "name");
        res.status(200).json({ success: true, plan: plans });
    } catch (error) {
        console.error("Error fetching plans:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Get a single plan by ID
export const getPlanByIdController = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id).populate("service");

        if (!plan) {
            return res.status(404).json({ error: "Plan not found" });
        }

        res.status(200).json({ success: true, plan });
    } catch (error) {
        console.error("Error fetching plan:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Update a plan
export const updatePlanController = async (req, res) => {
    try {
        const { planName, planPrice, planFeatures, duration } = req.body;

        // Convert comma-separated string to an array
        const featuresArray = planFeatures ? planFeatures.split(",").map(feature => feature.trim()) : [];

        const updatedPlan = await Plan.findByIdAndUpdate(
            req.params.id,
            { planName, planPrice, planFeatures: featuresArray, duration },
            { new: true }
        );

        if (!updatedPlan) {
            return res.status(404).json({ error: "Plan not found" });
        }

        res.status(200).json({ success: true, message: "Plan updated successfully!", plan: updatedPlan });
    } catch (error) {
        console.error("Error updating plan:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// ✅ Delete a plan
export const deletePlanController = async (req, res) => {
    try {
        const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

        if (!deletedPlan) {
            return res.status(404).json({ error: "Plan not found" });
        }

        res.status(200).json({ success: true, message: "Plan deleted successfully!" });
    } catch (error) {
        console.error("Error deleting plan:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
