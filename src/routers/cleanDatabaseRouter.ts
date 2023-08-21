import { Router } from "express";
import { CleanController } from "../controllers/cleanController";

const clearRouter = Router();

clearRouter.delete("/clean", CleanController.cleanDatabase);

export { clearRouter };
