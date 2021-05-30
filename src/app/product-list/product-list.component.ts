import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Product } from "../models/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    let product1 = new Product();
    product1.name = "Red Bouncy Ball";
    product1.price = "6.9";
    product1.category = "Bouncy Ball";
    product1.inventoryStatus = "OUTOFSTOCK";
    product1.stock = 0;
    product1.productionLength = 3;

    this.products.push(product1);

    let product2 = new Product();
    product2.name = "Blue Bouncy Ball";
    product2.price = "10";
    product2.category = "Bouncy Ball";
    product2.inventoryStatus = "OUTOFSTOCK";
    product2.stock = 0;
    product2.productionLength = 4;

    this.products.push(product2);
  }

  showMessage() {
    this.messageService.add({
      key: "product-built",
      severity: "success",
      summary: "Success",
      detail: "Message Content",
    });
  }
}
