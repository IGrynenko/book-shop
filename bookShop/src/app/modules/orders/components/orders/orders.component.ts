import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/modules/shared/services';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      address: new FormControl('', [Validators.required]),
      paymentMethod: new FormControl('', [Validators.required]),
      commentary: new FormControl('')
    });
    this.cartService.booksInCart$
  }
  
  onSubmit() {
    console.log('SUBMIT');
    this.cartService.removeAllBooks();
    this.router.navigate(['/products-list']);
  }
}
