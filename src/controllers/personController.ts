import { Request, Response } from "express";
import PersonService from "../services/personService";
import { z } from "zod";

export class PersonController {
    static createPerson(req: Request, res: Response) {
        try {
            const personBody: PersonDTO = PersonSchema.parse(req.body);

            const newPerson = PersonService.createPerson(personBody);
            res.status(200).json(newPerson);
        } catch (err : any) {
            res.status(400).json({ error: err.message });
        }
    }

    static getPerson(req: Request, res: Response) {
        try {
            const { CPF: cpf } = req.params;
            const person = PersonService.getPerson(cpf);
            res.status(200).json(person);
        } catch (err : any) {
            res.status(404).json({ error: err.message });
        }
    }
}

const PersonSchema = z.object({
  cpf: z.string().length(11),
  name: z.string(),
}).required();

type PersonDTO = z.infer<typeof PersonSchema>;