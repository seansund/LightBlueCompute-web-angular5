import { Item } from '../models/item.model';
import { LoginData } from '../models/login.model';
import { PurchaseItem } from '../models/purchaseitem.model';
import { UserState } from '../models/userstate.model';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs/Observable';

export interface BlueApi {
  getCatalog(): Observable<Item[]>;
  getItemById(itemId: string): Observable<Item>;
  buyItems(data: PurchaseItem): Observable<Item>;
  // addReviewItem(itemId: string, data: any): Observable<any>;
  getCustomerProfile(): Observable<Customer>;
}