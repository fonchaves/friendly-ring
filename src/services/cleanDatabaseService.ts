import PersonRepository from "../repositories/personRepository";
import RelationshipRepository from "../repositories/relationshipRepository";

export default class CleanDatabaseService {
    static clean() {
            PersonRepository.getInstance().deleteAllPersons();
            RelationshipRepository.getInstance().deleteAllRelationships();

    }
}