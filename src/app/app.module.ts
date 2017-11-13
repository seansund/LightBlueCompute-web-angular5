import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog.component';
import { CustomerComponent } from './components/customer.component';
import { HomeComponent } from './components/home.component';
import { ItemComponent } from './components/item.component';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';

import { BlueAPIMock } from './services/blueapimock.service';
import { UserInfoMock } from './services/userinfomock.service';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'logout',
  component: LogoutComponent
}, {
  path: 'catalog',
  component: CatalogComponent
}, {
  path: 'item/:id',
  component: ItemComponent
}, {
  path: 'customer',
  component: CustomerComponent
}, {
  path: '**',
  redirectTo: '/home'
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CatalogComponent,
    ItemComponent,
    CustomerComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  entryComponents: [],
  providers: [{
    provide: 'BlueApi', useClass: BlueAPIMock
  }, {
    provide: 'UserInfoApi', useClass: UserInfoMock
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
