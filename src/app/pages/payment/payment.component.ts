import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  total: number = 0;

  constructor(private paymentService: PaymentService) {}

  
  ngOnInit() {
    this.paymentService.total$.subscribe(total => {
      this.total = total;
    });
  }
  
}
