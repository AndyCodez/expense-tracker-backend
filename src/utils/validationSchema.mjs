export const createExpenseValidationSchema = {
    date: {
        notEmpty: {
            errorMessage: "Date cannot not be empty"
        },
    },
    name: {
        notEmpty: {
            errorMessage: "Expense name cannot not be empty"
        },
    },
    amount: {
        notEmpty: {
            errorMessage: "Amount cannot not be empty"
        },
    },
    category: {
        notEmpty: {
            errorMessage: "Category cannot not be empty"
        },
    },
}