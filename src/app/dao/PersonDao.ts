import { Person } from "../models/Person";
import { PersonRepository } from "../repository/PersonRepository";
import * as personData from "../json/PersonData.json";

export class PersonDao extends PersonRepository {
  getPerson(id: number): Person {
    throw new Error("Method not implemented.");
  }
    
  getRandomPerson(): Promise<Person> {
    let numberOfPersons = personData["default"].length - 1;
    let random = Math.floor(Math.random() * numberOfPersons);
    let randomPerson: Person = personData["default"][random];
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
