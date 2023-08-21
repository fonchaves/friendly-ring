import { Person } from "../models/personModel";

export default class PersonRepository {
    private Person: Person[] = [];
    private static instance: PersonRepository;

    public static getInstance(): PersonRepository {
        if (!PersonRepository.instance) {
            PersonRepository.instance = new PersonRepository();
        }
        return PersonRepository.instance;
    }

    public createPerson(person: Person) {
        this.Person.push(person);
        return person;
    }

    public getPersonByCpf(cpf: string) {
        const person = this.Person.find(person => person.cpf === cpf);
        return person;
    }
    
    public getAllPersons() {
        return this.Person;
    }

    public deleteAllPersons() {
        this.Person = [];
        return this.Person;
    }
}