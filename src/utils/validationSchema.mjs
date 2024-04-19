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
            errorMessage: "Amount cannot be empty"
        },
    },
    category: {
        notEmpty: {
            errorMessage: "Category cannot be empty"
        },
    },
}

export const createUserValidationSchema = {
    username: {
        notEmpty: {
            errorMessage: "Username cannot be empty",
        }
    },
    password: {
        notEmpty: true,
    },
};
