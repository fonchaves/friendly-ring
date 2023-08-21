import { Request, Response } from "express";
import RecommendationService from "../services/recommendationService";

export class RecommendationController {
    static getRecommendation(req: Request, res: Response) {
        try {
            const { CPF: cpf } = req.params;
            const recommendation = RecommendationService.getRecommendationByCpf(cpf);
            res.status(200).json(recommendation);
        } catch (err : any) {
            res.status(404).json({ error: err.message });
        }
    }
}