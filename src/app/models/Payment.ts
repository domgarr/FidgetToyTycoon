export class Payment {
  constructor() {}
  private _nameOnCard: string;
  public get nameOnCard(): string {
    return this._nameOnCard;
  }
  public set nameOnCard(value: string) {
    this._nameOnCard = value;
  }
  private _creditCardNumber: string;
  public get creditCardNumber(): string {
    return this._creditCardNumber;
  }
  public set creditCardNumber(value: string) {
    this._creditCardNumber = value;
  }
  private _expiration: string;
  public get expiration(): string {
    return this._expiration;
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  private _cvv: string;
  public get cvv(): string {
    return this._cvv;
  }
  public set cvv(value: string) {
    this._cvv = value;
  }
}
