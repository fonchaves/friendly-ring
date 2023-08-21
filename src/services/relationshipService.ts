import { Relationship } from "../models/relationshipModel";
import PersonRepository from "../repositories/personRepository";
import RelationshipRepository from "../repositories/relationshipRepository";

export default class RelationshipService {
    static createRelationship(body: Relationship) {
        // Esta rota deve receber dois CPFs e, caso os dois usuários existam, criar um
        // relacionamento entre eles, caso contrário, deve retornar erro com status code 404.

        // Check if person1 exists
        const person1Exists = PersonRepository.getInstance().getPersonByCpf(body.cpf1);

        // Check if person2 exists
        const person2Exists = PersonRepository.getInstance().getPersonByCpf(body.cpf2);

        // If not, throw error
        if (!person1Exists || !person2Exists) {
            throw new Error("User not found");
        }

        // If exists, create relationship
        const relationshipResponse = RelationshipRepository.getInstance().createRelationship(body);

        return relationshipResponse;
    }
}