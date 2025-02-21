import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import DbConnection from './Config/dataBase.js';
import routes from './Routes/UserRoute.js';

const app = express();

// Middleware
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

// Database connection
DbConnection()
// Routes
app.use('/api/v1/user', routes)

app.listen(process.env.PORT, () => {
    console.log("Listen on Port 8000")
})