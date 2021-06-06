import { Person } from "../models/Person";

export abstract class PersonRepository {
  private _persons: Person[];
  public get persons(): Person[] {
    return this._persons;
  }
  constructor(persons: Person[]) {
    this._persons = persons;
  }
  abstract getPerson(id: number): Promise<Person>;
  abstract getRandomPerson(): Promise<Person>;
}
