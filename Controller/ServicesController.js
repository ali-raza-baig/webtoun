import Service from "../Models/ServicesModel.js"; // Ensure the correct path to your model

// CREATE a new service
export const createService = async (req, res) => {
    try {
        const { name, description, images } = req.body;


        // Assuming `images` is an array of base64 strings or URLs
        const newService = new Service({
            name,
            description,
            images,
        });

        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ message: "Error creating service", error: error.message });
    }
};

// GET all services
export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: "Error fetching services", error: error.message });
    }
};

// GET a single service by ID
export const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ message: "Service not found" });

        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: "Error fetching service", error: error.message });
    }
};

// UPDATE a service by ID
export const updateService = async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedService) return res.status(404).json({ message: "Service not found" });

        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: "Error updating service", error: error.message });
    }
};

// DELETE a service by ID
export const deleteService = async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) return res.status(404).json({ message: "Service not found" });

        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting service", error: error.message });
    }
};
