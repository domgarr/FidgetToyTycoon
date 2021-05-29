import { Component, OnInit } from "@angular/core";
import { Timer } from "../utils/Timer";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  percentageComplete: number = 0;

  constructor() {}

  ngOnInit() {
    let timer = new Timer().start(5).subscribe((percentageDone) => {
      console.log(percentageDone);
      this.percentageComplete = percentageDone;
    });
  }
}
