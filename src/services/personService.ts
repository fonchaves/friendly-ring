import { Person } from "../models/personModel";
import PersonRepository from "../repositories/personRepository";

export default class PersonService {
    static createPerson(body: Person) {

        // Check if person already exists
        const userExists = PersonRepository.getInstance().getPersonByCpf(body.cpf);

        // If exists, throw error
        if (userExists) {
            throw new Error("User already exists");
        }

        // If not, create person
        const userResponse = PersonRepository.getInstance().createPerson(body);
        

        return userResponse;
    }

    static getPerson(cpf: string) {

        // Check if person exists
        const userExists = PersonRepository.getInstance().getPersonByCpf(cpf);

        // If not, throw error
        if (!userExists) {
            throw new Error("User not found");
        }

        // If exists, return person
        return userExists;

    }
}