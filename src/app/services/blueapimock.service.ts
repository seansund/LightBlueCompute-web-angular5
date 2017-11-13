import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BlueApi } from './blueapi.api';
import { Item } from '../models/item.model';
import { PurchaseItem } from '../models/purchaseitem.model';
import { LoginData } from '../models/login.model';
import { UserState } from '../models/userstate.model';
import { Customer } from '../models/customer.model';

const items = new Map<string, Item>();
items.set('1', {
  id: '1',
  name: 'name1',
  img: '01-typewriter.jpg',
  price: 5,
  stock: 2,
  description: 'name1 item'
});
items.set('2', {
  id: '2',
  name: 'name2',
  img: '608-calculator.jpg',
  price: 10,
  stock: 5,
  description: 'name2 item'
});

@Injectable()
export class BlueAPIMock implements BlueApi {
  getCatalog(): Observable<Item[]> {
    return Observable.create(observer => {
      observer.next(Array.from(items.values()));
      observer.complete();
    });
  }
  getItemById(itemId: string): Observable<Item> {
    return Observable.create(observer => {
      observer.next(items.get(itemId));
      observer.complete();
    });
  }
  buyItems(data: PurchaseItem): Observable<Item> {
    return Observable.create(observer => {
      let item = items.get(data.itemId);
      
      if (data.count <= item.stock) {
        item.stock -= data.count;
        observer.next(item);
      } else {
        observer.error('Insufficient stock');
      }
      observer.complete();
    });
  }
  getCustomerProfile(): Observable<Customer> {
    return Observable.create(observer => {
      let customer: Customer;

      observer.next(customer);
      observer.complete();
    });
  }
}
