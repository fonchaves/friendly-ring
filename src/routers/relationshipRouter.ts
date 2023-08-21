import { Router } from "express";
import { RelationshipController } from "../controllers/relationshipController";

const relationshipRouter = Router();

relationshipRouter.post("/relationship", RelationshipController.createRelationship);

export { relationshipRouter };
