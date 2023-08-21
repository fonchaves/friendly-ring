import { Router } from "express";
import { PersonController } from "../controllers/personController";

const personRouter = Router();

personRouter.post("/person", PersonController.createPerson);
personRouter.get("/person/:CPF", PersonController.getPerson);

export { personRouter };
