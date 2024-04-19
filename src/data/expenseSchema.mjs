import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    date: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    amount: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
});

export const Expense = mongoose.model("Expense", ExpenseSchema);