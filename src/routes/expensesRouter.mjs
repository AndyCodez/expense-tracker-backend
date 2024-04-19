import { Router } from "express";
import { Expense } from "../data/expenseSchema.mjs";
import { createExpenseValidationSchema } from "../utils/validationSchema.mjs";
import { checkSchema, matchedData, validationResult } from "express-validator";

const router = Router();

router.get('/api/expenses', async (req, res) => {
    try {
        const foundExpenses = await Expense.find();
        console.log("Fetching expenses");
        return res.status(200).send(foundExpenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        return res.sendStatus(500);
    }
});


router.post('/api/expenses', checkSchema(createExpenseValidationSchema), async (req, res) => {
    const errorResult = validationResult(req);

    if (!errorResult.isEmpty()) {
        return res.status(400).send(errorResult);
    }

    try {
        const data = matchedData(req);
        const newExpense = new Expense(data);
        const savedExpense = await newExpense.save();
        console.log("Saved new expense");
        return res.status(201).send(savedExpense);
    } catch (error) {
        console.error('Error saving expense:', error);
        return res.sendStatus(500);
    }
});


export default router;