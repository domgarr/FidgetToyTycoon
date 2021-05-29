import { Injectable } from "@angular/core";
import { Person } from "../models/Person";
import { PersonRepository } from "../repository/PersonRepository";
import { PersonDao } from "../dao/PersonDao";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private personRepository: PersonRepository;
  constructor() {
    this.personRepository = new PersonDao();
    }

  getRandomPerson(): Promise<Person> {
    return this.personRepository.getRandomPerson();
  }
}
