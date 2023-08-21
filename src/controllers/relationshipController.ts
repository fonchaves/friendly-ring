import { Request, Response } from "express";
import { z } from "zod";
import RelationshipService from "../services/relationshipService";
export class RelationshipController {
    static async createRelationship(req: Request, res: Response) {
        try {
            const relationshipBody: RelationshipDTO = RelationshipSchema.parse(req.body);
            const newRelationship = 
                RelationshipService.createRelationship(relationshipBody);
            res.status(200).json(newRelationship);
        } catch (err : any) {
            res.status(404).json({ error: err.message });
        }

    }
}

const RelationshipSchema = z.object({
    cpf1: z.string().length(11),
    cpf2: z.string().length(11),
}).required();

type RelationshipDTO = z.infer<typeof RelationshipSchema>;