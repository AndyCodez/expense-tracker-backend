import { Router } from "express";
import expenseRouter from "./expensesRouter.mjs"
import authRouter from "./authRouter.mjs"
import userRouter from "./userRouter.mjs"

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(expenseRouter);

export default router;