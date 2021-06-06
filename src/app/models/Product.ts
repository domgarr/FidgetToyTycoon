export class Product {
  public id: number;
  public name: String;
  public description: String;
  public price: number;
  public category: String;
  public inventoryStatus: String;
  public quantity: number;
  public imgSrc: string;

  public productionLength: number;

  public getProductionLengthInMilli(): number {
    return this.productionLength * 1000;
  }

  constructor() {}
}
