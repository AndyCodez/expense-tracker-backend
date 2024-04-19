import { Router } from "express";
import expenseRouter from "./expensesRouter.mjs"

const router = Router();

router.use(expenseRouter);

export default router;