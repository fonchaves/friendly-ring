import { Request, Response } from "express";
import CleanDatabaseService from "../services/cleanDatabaseService";

export class CleanController {
    static async cleanDatabase(req: Request, res: Response) {
        try {

            CleanDatabaseService.clean();
            
            res.status(200).send({
                message: "Database cleaned successfully"
            });
        } catch (err : any) {
            res.status(400).send({
                message: err.message
            });
        }

    }
}