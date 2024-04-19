import { Router } from "express";
import { Expense } from "../data/expenseSchema.mjs";
import { createExpenseValidationSchema } from "../utils/validationSchema.mjs";
import { checkSchema, matchedData, validationResult } from "express-validator";

const router = Router();

router.get('/api/expenses', (req, res) => {

    res.sendStatus(200);
});


router.post('/api/expenses', checkSchema(createExpenseValidationSchema), async (req, res) => {
    const errorResult = validationResult(req);

    if (!errorResult.isEmpty()) return res.status(400).send(errorResult);

    const data = matchedData(req)
    const newExpense = new Expense(data);

    try {
        const savedExpense = await newExpense.save();
        return res.status(201).send(savedExpense);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
});

export default router;