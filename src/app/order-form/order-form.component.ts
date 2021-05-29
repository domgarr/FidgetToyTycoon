import { Component, OnInit } from "@angular/core";
import { Person } from "../models/Person";
import { PersonService } from "../service/person.service";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.css"],
})
export class OrderFormComponent implements OnInit {
  constructor(private personService: PersonService) {}
  public person: Person = new Person();

  ngOnInit() {
    this.personService.getRandomPerson().then(
      (person: Person) => {
        this.person = person;
      },
      (rejected) => {
        console.log(rejected);
      }
    );
    this.person.firstName = "Baylee";
  }
}
