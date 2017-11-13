import { Component, OnInit, Inject } from '@angular/core';

import { BlueApi } from '../services/blueapi.api';

import { Customer } from '../models/customer.model';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: [ './customer.component.css' ]
})

export class CustomerComponent implements OnInit {
  customerInfo: Customer;

  constructor(@Inject('BlueApi') private service: BlueApi) { }

  ngOnInit() {
    this.service.getCustomerProfile().subscribe(customer => {
      this.customerInfo = customer;
    });
  }
}
