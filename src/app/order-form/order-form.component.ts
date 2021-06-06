import { Component, OnInit } from "@angular/core";
import { Order } from "../models/Order";
import { Person } from "../models/Person";
import { Product } from "../models/product";
import { OrderService } from "../service/order.service";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.css"],
})
export class OrderFormComponent implements OnInit {
  constructor(private orderService: OrderService) {}
  public order: {};

  ngOnInit() {
    this.generateOrder();
  }

  generateOrder() {
    this.order = Object.create(this.orderService.generateOrder());
    console.log(this.order);
  }
}
