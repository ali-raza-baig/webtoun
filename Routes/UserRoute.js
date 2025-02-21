import express from 'express';
import {
    registerController,
    loginController,
    resetPasswordController,
    forgotPasswordController,
} from '../Controller/UserController.js';
import { isAdmin, isVerified } from '../Middelware/authMiddelware.js';

const routes = express.Router();

routes.post('/register', registerController);
routes.post('/login', loginController);
routes.post('/reset-password', resetPasswordController);
routes.post('/forget-password', forgotPasswordController);

// User Verify Route 
routes.get("/user-auth", isVerified, (req, res) => {
    res.status(200).send({ ok: true })
})

// Admin Verify Routes 
routes.get("/admin-auth", isVerified, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})

export default routes;
