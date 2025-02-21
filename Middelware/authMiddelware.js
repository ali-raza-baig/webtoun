import jwt from "jsonwebtoken";
import User from "../Models/UserModel.js";

export const isVerified = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).send({
                success: false,
                message: "token not recived"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if (!decode) {
            return res.status(400).send({
                success: false,
                message: "Not decode"
            })
        }
        req.userId = decode.userId
        next()

    } catch (error) {
        console.log('Error in Auth Middelware ', error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId)
        if (user.role === 1) {
            next()
        } else {
            return res.status(400).send({
                success: false,
                message: 'You are not allowed to access'
            })
        }

    } catch (error) {
        console.log('Error in admin Auth Middelware ', error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}