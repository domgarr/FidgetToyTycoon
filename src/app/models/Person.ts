import { Payment } from "./Payment";

export class Person {
  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  private _address: string;
  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
  private _country: string;
  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }
  private _state: string;
  public get state(): string {
    return this._state;
  }
  public set state(value: string) {
    this._state = value;
  }

  private _payment: Payment;
  public get payment(): Payment {
    return this._payment;
  }
  public set payment(value: Payment) {
    this._payment = value;
  }

  constructor() {}
}
