import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private totalSource = new BehaviorSubject<number>(0);
  total$ = this.totalSource.asObservable();

  constructor() { }

  setTotal(amount: number) {
    this.totalSource.next(amount);
  }

  processPayment(method: string, amount: number) {
    console.log(`Processing ${amount}€ with ${method}`);
    // Add your payment logic here
    return true;
  }
}
