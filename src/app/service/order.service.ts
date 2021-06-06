import {
  getInterpolationArgsLength,
  temporaryAllocator,
} from "@angular/compiler/src/render3/view/util";
import { Injectable } from "@angular/core";
import { Order } from "../models/Order";
import { Person } from "../models/Person";
import { Product } from "../models/product";
import { PersonService } from "./person.service";
import { ProductService } from "./product.service";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(
    private personService: PersonService,
    private productService: ProductService
  ) {}

  generateOrder() {
    let order: Order = new Order();

    order.id = 1;

    this.personService.getRandomPerson().then((person) => {
      order.person = Object.assign(new Person(), person);
    });

    do {
      this.generateCart(order);
    } while (order.cart.length == 0);

    return order;
  }

  public generateCart(order: Order): void {
    let products: Product[] = this.productService.findAll();
    let cart: Product[] = [];
    let totalPrice: number = 0;
    let totalQuantity: number = 0;
    products.forEach((product) => {
      if (this.isProductAddedToCart()) {
        let tempProduct = new Product();
        tempProduct.id = product.id;
        tempProduct.name = product.name;
        tempProduct.price = product.price;
        tempProduct.quantity = this.quantityOrdered();
        cart.push(tempProduct);

        totalQuantity += tempProduct.quantity;
        totalPrice += this.getTotalPrice(tempProduct);
      }
    });

    order.cart = cart;
    order.totalQuantity = totalQuantity;
    order.totalPrice = totalPrice;
  }

  private isProductAddedToCart() {
    return Math.floor(Math.random() * 2);
  }

  private quantityOrdered() {
    return Math.floor(1 + Math.random() * 4);
  }

  private getTotalPrice(product: Product): number {
    return product.quantity * product.price;
  }
}
