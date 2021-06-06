import { Person } from "./Person";
import { Product } from "./product";

export class Order {
  public id: number;
  public totalPrice: number;
  public totalQuantity: number;
  public cart: Product[];
  public person: Person;
}
