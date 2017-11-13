import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { AccessToken } from '../models/accesstoken.model';
import { Item } from '../models/item.model';
import { BlueApi } from '../services/blueapi.api';
import { UserInfoApi } from '../services/userinfo.api';

@Component({
  selector: 'item',
  templateUrl: 'item.component.html',
  styleUrls: [
    './item.component.css',
    '../stylesheets/pure/pure-min.css',
    '../stylesheets/pure/grids-responsive-min.css',
    '../stylesheets/font-awesome/font-awesome.css',
    '../stylesheets/pure/layouts/main.css',
    '../stylesheets/pure/layouts/inventory.css',
    '../stylesheets/pure/layouts/item.css',
    '../stylesheets/pure/layouts/login.css'
  ]
})

export class ItemComponent implements OnInit {
  baseURL: string = 'assets/images/items/';
  item: Item;
  itemQuantity: number;
  success: boolean;
  fail: boolean;
  loggedIn: boolean;

  constructor(
    @Inject('BlueApi') private service: BlueApi,
    @Inject('UserInfoApi') private userInfoService: UserInfoApi,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const itemId = params.get('id');
        console.log('itemId', itemId);
        return this.service.getItemById(itemId);
      }).subscribe(x => {
        this.item = x;
      });
    
    this.loggedIn = this.userInfoService.currentUser.authenticated;
  }
  buy(): void {
    this.service.buyItems({
        'count': this.itemQuantity, 
        'itemId': this.item.id
      }).subscribe(x => {
        this.success = true;
        this.fail = false;
        this.item = x;
      }, e => {
        this.success = false;
        this.fail = true;
      });
  }
}
