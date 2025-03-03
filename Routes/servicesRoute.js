import express from "express";
import {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService
} from "../Controller/ServicesController.js";

const router = express.Router();

router.post("/addservice", createService);
router.get("/getallservices", getAllServices);
router.get("/servicebyid/:id", getServiceById);
router.put("/updateservice/:id", updateService);
router.delete("/deleteservice/:id", deleteService);

export default router;
