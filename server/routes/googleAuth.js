import express from "express";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const googleAuthRouter = express.Router();

googleAuthRouter.get("/google", (req, res) => {
    if (!process.env.GOOGLE_CLIENT_ID) {
        return res.status(500).json({ message: "GOOGLE_CLIENT_ID is not configured" });
    }

    // ✅ Read env variable per request, not at startup
    const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/api/auth/google/callback";

    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: "code",
        scope: "openid email profile",
    });

    return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
});

googleAuthRouter.get("/google/callback", async (req, res) => {
    const { code } = req.query;

    // ✅ Read env variable per request
    const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/api/auth/google/callback";

    if (!code) {
        return res.status(400).json({ message: "Missing Google authorization code" });
    }

    if (
        !process.env.GOOGLE_CLIENT_ID ||
        !process.env.GOOGLE_CLIENT_SECRET ||
        !process.env.JWT_SECRET ||
        !process.env.CLIENT_URL
    ) {
        return res.status(500).json({ message: "Google OAuth env vars are not configured" });
    }

    try {
        const tokenResponse = await axios.post(
            "https://oauth2.googleapis.com/token",
            new URLSearchParams({
                code: code.toString(),
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: REDIRECT_URI,
                grant_type: "authorization_code",
            }).toString(),
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
        );

        const { access_token } = tokenResponse.data;

        const userInfoResponse = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        const { sub, email, name } = userInfoResponse.data;

        if (!email) {
            return res.redirect(`${process.env.CLIENT_URL}/?state=login&error=missing_email`);
        }

        let user = await User.findOne({ email });

        if (!user) {
            const randomPassword = Math.random().toString(36).slice(-12);
            const hashedPassword = await bcrypt.hash(randomPassword, 10);

            user = await User.create({
                name: name || email.split("@")[0],
                email,
                password: hashedPassword,
                googleId: sub,
            });
        } else if (!user.googleId) {
            user.googleId = sub;
            await user.save();
        }

        const appToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        return res.redirect(
            `${process.env.CLIENT_URL}/auth/callback?token=${encodeURIComponent(appToken)}`
        );
    } catch (error) {
        console.error("Google auth error:", error.response?.data || error.message);
        return res.redirect(`${process.env.CLIENT_URL}/?state=login&error=google_auth_failed`);
    }
});

export default googleAuthRouter;