import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { BlueApi } from './blueapi.api';
import { UserInfoApi } from './userinfo.api';

import { Item } from '../models/item.model';
import { LoginData } from '../models/login.model';
import { UserState } from '../models/userstate.model';
import { PurchaseItem } from '../models/purchaseitem.model';
import { Customer } from '../models/customer.model';

const baseUrl = environment.apiEndpoint;

@Injectable()
export class BlueAPIService implements BlueApi {
  constructor(
    private http: Http,
    @Inject('UserInfoApi') private userInfo: UserInfoApi) { }
  
  getCatalog(): Observable<Item[]> {
    return this.http.get(baseUrl + 'catalog/').switchMap(response => {
        // Read the 'data' field from the JSON response and return
        // another observable
        return response['data'];
      });
  }
  getItemById(itemId: string): Observable<Item> {
    return this.http.get(baseUrl + 'catalog/' + itemId).switchMap(response => {
        return response['data'];
      });
  }
  buyItems(data: PurchaseItem): Observable<Item> {
    return this.http.post(baseUrl + 'order/', data, this.jwt())
      .switchMap(response => {
        return response['data'];
      });
  }
  addReviewItem(itemId: string, data: any): Observable<any> {
    return this.http.post(baseUrl + 'review/' + itemId, data, this.jwt())
      .switchMap(response => {
        return response['data'];
      });
  }
  getCustomerProfile(): Observable<Customer> {
    return this.http.get(baseUrl + 'customer/', this.jwt())
      .switchMap(response => {
        return response['data'];
      });
  }
  private jwt() {
    let currentUser = this.userInfo.currentUser;
    if (currentUser && currentUser.accessToken) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.accessToken });
        return new RequestOptions({ headers: headers });
    }
  }
}
