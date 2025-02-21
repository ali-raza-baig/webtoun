import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/UserModel.js';
import { hashedToken } from '../Utilities/HashString.js';
import genrateToken from '../Utilities/genrateToken.js';

// Registration Controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in use.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save user to the database
        await newUser.save();

        // Generate JWT token
        const token = genrateToken(newUser._id, res)

        res.status(201).json({
            success: true,
            message: 'User registered successfully.',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

// Login Controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.password || '');
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate JWT token
        const token = genrateToken(user._id, res)

        res.status(200).json({
            success: true,
            message: 'Login successful.',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

// Reset Password Controller
export const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Generate a random verification string
        const string = hashedToken()
        const expiryTime = Date.now() + 3600000;

        // Update the password
        user.resetPasswordToken = string;
        user.resetPasswordExpiresAt = expiryTime;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Reset link Sent successfully.'
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

// Verification Token Controller
export const resetPasswordController = async (req, res) => {
    try {
        const { token, email, password } = req.body;

        // Find the user with the token
        const user = await User.findOne({ resetPasswordToken: token, email: email });
        if (!user) {
            return res.status(404).json({ message: 'Invalid or expired token.' });
        }
        // Check the token expiry time
        if (user.resetPasswordExpiresAt < Date.now()) {
            return res.status(400).json({ message: 'Reset token has expired.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Verify the user
        user.resetPasswordToken = null;
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'User verified successfully.'
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};
