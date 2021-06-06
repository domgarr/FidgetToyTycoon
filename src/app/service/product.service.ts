import { Injectable } from "@angular/core";
import { LocalStorageService } from "ngx-webstorage";
import { Product } from "../models/product";
import * as productData from "../json/ProductData.json";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly PRODUCTS = "products";
  private products: Product[] = [];

  constructor(private localStorage: LocalStorageService) {
    this.products;

    productData["default"].forEach((productAsJson) => {
      let product = Object.assign(new Product(), productAsJson);
      this.products.push(product);
    });
  }

  save(product: Product): void {
    let products = {};

    if (this.localStorage.retrieve(this.PRODUCTS) == null) {
      products[product.id] = this.copyToEntity(product);
      this.localStorage.store(this.PRODUCTS, JSON.stringify(products));
    }

    products = JSON.parse(this.localStorage.retrieve(this.PRODUCTS));
    products[product.id] = this.copyToEntity(product);
    this.localStorage.store(this.PRODUCTS, JSON.stringify(products));
  }

  findById(id: number) {
    return this.localStorage.retrieve(this.PRODUCTS)[id];
  }

  findAll() : Product[]{
    let productEntities = JSON.parse(this.localStorage.retrieve(this.PRODUCTS));
    this.products.forEach((product) => {
      let productEntity = productEntities[product.id];
      if (productEntity) {
        product.quantity = productEntity._stock;
      }
    });

    return this.clonedProducts();
  }

  copyToEntity(product: Product) {
    let entity = new Product();
    entity.quantity = product.quantity;
    return entity;
  }

  clonedProducts() : Product[] {
    const clonedInstance : Product[]= []; 
    this.products.forEach(product =>{
        clonedInstance.push(Object.assign(new Product(), product));
    });
    return clonedInstance;
  }
}
