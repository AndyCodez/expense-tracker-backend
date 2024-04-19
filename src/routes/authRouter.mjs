import passport from "passport";
import { Router } from "express";

const router = Router();

// Authenticate user
router.post(
    "/api/auth",
    passport.authenticate("local"),
    (req, res) => {
        res.sendStatus(200);
    }
);

// Check if user is authenticated
router.get("/api/auth/status", (req, res) => {
    console.log("req.user: =>", req.user)
    return req.user ? res.send(req.user) : res.sendStatus(401);
});

// Log out user
router.post("/api/auth/logout", (req, res) => {
    if (!req.user) return res.sendStatus(401);
    req.logout((err) => {
        if (err) return res.sendStatus(400);
        res.send(200);
    });
});

export default router;
