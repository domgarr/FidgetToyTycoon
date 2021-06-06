import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { nextTick } from "process";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Product } from "../models/product";
import { Timer } from "../utils/Timer";
import { ProductService } from "./product.service";

@Injectable({
  providedIn: "root",
})
export class ProductionService {
  private buildingProductSubject: Subject<boolean> = new Subject<boolean>();
  private isProductBuilding: boolean = false;
  private timer: Timer = new Timer();
  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  canProductBuildSubject(): Subject<boolean> {
    return this.buildingProductSubject;
  }

  produce(product: Product): Observable<number> {
    console.log(product);
    if (this.isProductBuilding == true) {
      return null;
    }
    this.setIsProductBuilding(true);
    setTimeout(() => {
      this.setIsProductBuilding(false);
      //Product multiplier here
      this.addStockWithMultiplier(product);
      this.productService.save(product);
      this.showProductionSuccess(product);
    }, product.getProductionLengthInMilli() + 750);
    return this.timer.start(product.productionLength);
  }

  setIsProductBuilding(isProductBuilding: boolean): void {
    this.buildingProductSubject.next(isProductBuilding);
    this.isProductBuilding = isProductBuilding;
  }

  showProductionSuccess(product: Product) {
    this.messageService.add({
      key: "production-success",
      severity: "success",
      summary: `${product.name}  created.`,
      detail: `Stock: ${product.quantity}`,
    });
  }

  addStockWithMultiplier(product: Product) {
    product.quantity += 1;
  }
}
