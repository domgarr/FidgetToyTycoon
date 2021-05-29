import { Person } from "../models/Person";

export abstract class PersonRepository {
  abstract getPerson(id: number): Person;
  abstract getRandomPerson(): Promise<Person>;
}
