import { Router } from "express";
import { RecommendationController } from "../controllers/recommendationController";

const recommendationRouter = Router();

recommendationRouter.get("/recommendations/:CPF", RecommendationController.getRecommendation);

export { recommendationRouter };
