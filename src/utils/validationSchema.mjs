export const createExpenseValidationSchema = {
    date: {
        notEmpty: {
            errorMessage: "Date cannot be empty"
        },
        isISO8601: {
            errorMessage: "Date must be in ISO 8601 format"
        }
    },
    name: {
        notEmpty: {
            errorMessage: "Expense name cannot be empty"
        },
        isLength: {
            options: { min: 1, max: 255 },
            errorMessage: "Expense name must be between 1 and 255 characters"
        }
    },
    amount: {
        notEmpty: {
            errorMessage: "Amount cannot be empty"
        },
        isNumeric: {
            errorMessage: "Amount must be a number"
        },
        isFloat: {
            options: { min: 0 },
            errorMessage: "Amount must be a positive number"
        }
    },
    category: {
        notEmpty: {
            errorMessage: "Category cannot be empty"
        },
        isIn: {
            options: [['Groceries', 'Utilities', 'Rent', 'Transportation', 'Entertainment', 'Healthcare', 'Insurance', 'Dining Out', 'Clothing', 'Miscellaneous']],
            errorMessage: "Invalid category"
        }
    }
};

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
