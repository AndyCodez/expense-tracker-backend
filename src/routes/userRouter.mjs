import { Router } from "express";
import {
    validationResult,
    checkSchema,
    matchedData,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchema.mjs";
import { User } from "../data/userSchema.mjs";
import { hashPassword } from "../utils/bcrypt.mjs";

const router = Router();

router.post(
    "/api/users",
    checkSchema(createUserValidationSchema),
    async (req, res) => {
        console.log("in the user creation method")

        const errorResult = validationResult(req);
        if (!errorResult.isEmpty()) return res.status(400).send(errorResult.array());

        const data = matchedData(req);
        data.password = hashPassword(data.password);
        const newUser = new User(data);
        try {
            const savedUser = await newUser.save();
            console.log("Successfully saved user");
            return res.status(201).send(savedUser);
        } catch (err) {
            console.error("Error creating user:", err)
            return res.sendStatus(400);
        }
    });

export default router;