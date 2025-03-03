import express from "express";
import { createSubscriptionController, deleteSubscriptionController, getAllSubscriptionController, getSubscriptionByPlanIdController, getSubscriptionByUserIdController, updateSubscriptionStatusController } from "../Controller/SubscriptionController.js";
import { isAdmin, isVerified } from "../Middelware/authMiddelware.js";

const routes = express.Router();


routes.post('/createSubscription', isVerified, createSubscriptionController)

routes.get("/getallSubscriptions", isVerified, isAdmin, getAllSubscriptionController)
routes.get("/getSubscriptionByUserId", isVerified, getSubscriptionByUserIdController)
routes.get("/getSubscriptionByPlanId/:planId", isVerified, getSubscriptionByPlanIdController)

routes.put("/updateSubscriptionStatus/:id", isVerified, isAdmin, updateSubscriptionStatusController)
routes.get("/deleteSubscriptionController/:id", isVerified, isAdmin, deleteSubscriptionController)
export default routes;