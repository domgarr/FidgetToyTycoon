import { Observable } from "rxjs";

export class Timer {
  readonly interval: number = 100;

  constructor() {}

  start(length: number): Observable<number> {
    let millis = 0;
    let totalMillis = length * 1000;
    return new Observable<number>((observer) => {
      let intervalId = setInterval(() => {
        millis += this.interval;
        observer.next(Math.floor((millis / totalMillis) * 100));
        if (millis >= totalMillis) clearInterval(intervalId);
      }, this.interval);
    });
  }
}
