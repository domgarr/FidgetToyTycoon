import { Person } from "../models/Person";
import { PersonRepository } from "../repository/PersonRepository";
import * as personData from "../json/PersonData.json";

export class PersonDao extends PersonRepository {
  constructor() {
    super(personData["default"]);
  }

  getPerson(id: number): Promise<Person> {
    return new Promise<Person>((resolve, reject) => {
      this.persons.forEach((person: Person) => {
        if (person.id == id) {
          resolve(person);
        }
      });
      reject(null);
    });
  }

  getRandomPerson(): Promise<Person> {
    let numberOfPersons = this.persons.length - 1;
    let random = Math.floor(Math.random() * numberOfPersons);
    let randomPerson: Person = this.persons[random];
    setPayment(randomPerson);
    return new Promise<Person>((resolve, reject) => {
      setTimeout(() => {
        resolve(randomPerson);
      }, 100);
    });
  }
}
const setPayment = (person: Person) => {
  person.payment.nameOnCard = `${person.firstName} ${person.lastName}`;

  let expDay = Math.floor(1 + Math.random() * 11);
  let expYear = new Date().getFullYear() + Math.floor(Math.random() * 4);
  person.payment.expiration = `${expDay}/${expYear}`;
};
