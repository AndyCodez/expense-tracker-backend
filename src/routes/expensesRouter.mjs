import { Router } from "express";
import { Expense } from "../data/expenseSchema.mjs";

const router = Router();

router.get('/api/expenses', (req, res) => {

    res.sendStatus(200);
});


router.post('/api/expenses', async (req, res) => {
    const { body } = req;
    console.log("body: ", req)
    const newExpense = new Expense(body);

    try {
        const savedExpense = await newExpense.save();
        return res.status(201).send(savedExpense);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
});

export default router;