import { Relationship } from "../models/relationshipModel";

export default class RelationshipRepository {
    private relationship: Relationship[] = [];
    private static instance: RelationshipRepository;

    public static getInstance(): RelationshipRepository {
        if (!RelationshipRepository.instance) {
            RelationshipRepository.instance = new RelationshipRepository();
        }
        return RelationshipRepository.instance;
    }

    public createRelationship(relation: Relationship) {
        this.relationship.push(relation);
        return relation;
    }

    public getRelationshipByCpf(cpf: string) {
        const relationship = this.relationship.filter(relationship => relationship.cpf1 === cpf);
        
        return relationship;
    }

    public deleteAllRelationships() {
        this.relationship = [];
    }

}