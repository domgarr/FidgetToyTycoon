import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { nextTick } from "process";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Product } from "../models/product";
import { Timer } from "../utils/Timer";

@Injectable({
  providedIn: "root",
})
export class ProductionService {
  private buildingProductSubject: Subject<boolean> = new Subject<boolean>();
  private isProductBuilding: boolean = false;
  private timer: Timer = new Timer();
  constructor(private messageService: MessageService) {}

  canProductBuildSubject(): Subject<boolean> {
    return this.buildingProductSubject;
  }

  produce(product: Product): Observable<number> {
    if (this.isProductBuilding == true) {
      return null;
    }
    this.setIsProductBuilding(true);
    setTimeout(() => {
      this.setIsProductBuilding(false);
      console.log(this.setIsProductBuilding);
    }, product.getProductionLengthInMili());
    return this.timer.start(product.productionLength);
  }

  setIsProductBuilding(isProductBuilding: boolean): void {
    this.buildingProductSubject.next(isProductBuilding);
    this.isProductBuilding = isProductBuilding;
  }
}
