import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import DbConnection from './Config/dataBase.js';
import routes from './Routes/UserRoute.js';
import serviceRoutes from "./Routes/servicesRoute.js";
import planRoutes from './Routes/plansRoute.js'
import subscriptionRoutes from './Routes/SubscriptionRoute.js'
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

// Determine __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

// Database connection
DbConnection()
// Routes
app.use('/api/v1/user', routes)
app.use('/api/v1/services', serviceRoutes)
app.use('/api/v1/plans', planRoutes)
app.use('/api/v1/subscription', subscriptionRoutes)

// Serve Static Files from Vite Build Directory (Frontend)
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Handle Client-Side Routing for React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log("Listen on Port 8000")
})