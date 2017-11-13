import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './stylesheets/pure/pure-min.css',
    './stylesheets/pure/grids-responsive-min.css',
    './stylesheets/font-awesome/font-awesome.css',
    './stylesheets/pure/layouts/main.css',
    './stylesheets/pure/layouts/inventory.css',
    './stylesheets/pure/layouts/item.css',
    './stylesheets/pure/layouts/login.css'
  ]
})
export class AppComponent {
  title = 'IBM Cloud Architecture';
}
