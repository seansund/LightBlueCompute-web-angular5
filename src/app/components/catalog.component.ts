import { Component, OnInit, Inject } from '@angular/core';

import { BlueApi } from '../services/blueapi.api';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [ 
    './catalog.component.css',
    '../stylesheets/pure/pure-min.css',
    '../stylesheets/pure/grids-responsive-min.css',
    '../stylesheets/font-awesome/font-awesome.css',
    '../stylesheets/pure/layouts/main.css',
    '../stylesheets/pure/layouts/inventory.css',
    '../stylesheets/pure/layouts/item.css',
    '../stylesheets/pure/layouts/login.css'
  ]
})

export class CatalogComponent implements OnInit {
  itemList: Item[];
  baseURL: string = 'assets/images/items/';

  constructor(@Inject('BlueApi') private service: BlueApi) { }

  ngOnInit() {
    this.service.getCatalog().subscribe(x => {
      this.itemList = x;
    }, e => {
      console.log('error getting catalog', e);
    }, () => {
      console.log('onCompleted');
    });
  }
}