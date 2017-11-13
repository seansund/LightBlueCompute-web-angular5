import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: [
    './home.component.css',
    '../stylesheets/pure/pure-min.css',
    '../stylesheets/pure/grids-responsive-min.css',
    '../stylesheets/font-awesome/font-awesome.css',
    '../stylesheets/pure/layouts/main.css',
    '../stylesheets/pure/layouts/inventory.css',
    '../stylesheets/pure/layouts/item.css',
    '../stylesheets/pure/layouts/login.css'
  ]
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}