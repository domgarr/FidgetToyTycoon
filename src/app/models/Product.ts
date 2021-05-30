export class Product {
  private _name: String;
  private _description: String;
  private _price: String;
  private _category: String;
  private _inventoryStatus: String;
  private _stock: number;
  private _productionLength: number;
  public get productionLength(): number {
    return this._productionLength;
  }
  public set productionLength(value: number) {
    this._productionLength = value;
  }
  public get stock(): number {
    return this._stock;
  }
  public set stock(value: number) {
    this._stock = value;
  }

  public get inventoryStatus(): String {
    return this._inventoryStatus;
  }
  public set inventoryStatus(value: String) {
    this._inventoryStatus = value;
  }
  public get category(): String {
    return this._category;
  }
  public set category(value: String) {
    this._category = value;
  }

  public get description(): String {
    return this._description;
  }
  public set description(value: String) {
    this._description = value;
  }

  public get price(): String {
    return this._price;
  }
  public set price(value: String) {
    this._price = value;
  }

  public get name(): String {
    return this._name;
  }
  public set name(value: String) {
    this._name = value;
  }

  public getProductionLengthInMili(): number {
    return this.productionLength * 1000;
  }

  constructor() {}
}
