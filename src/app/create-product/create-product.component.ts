import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { MessageService } from "primeng/api";
import { Product } from "../models/product";
import { ProductionService } from "../service/production.service";
import { Timer } from "../utils/Timer";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnInit {
  percentageComplete: number = 0;
  isProductBuilding: boolean = false;

  @Input() product: Product;
  @Output() public showMessageRequest = new EventEmitter();

  constructor(private productionService: ProductionService) {}

  ngOnInit() {
    this.productionService
      .canProductBuildSubject()
      .subscribe((isProductBuilding) => {
        this.isProductBuilding = isProductBuilding;
      });
  }

  onBuild() {
    let production = this.productionService.produce(this.product);
    if (production == null) {
      return;
    }
    production.subscribe((percentageDone) => {
      this.percentageComplete = percentageDone;
      if (percentageDone >= 100) {
        this.percentageComplete = 100;
        this.product.stock++;
      }
    });
  }
}
