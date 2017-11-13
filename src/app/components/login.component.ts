import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoApi } from '../services/userinfo.api';
import { LoginData } from '../models/login.model';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: [
    './login.component.css',
    '../stylesheets/pure/pure-min.css',
    '../stylesheets/pure/grids-responsive-min.css',
    '../stylesheets/font-awesome/font-awesome.css',
    '../stylesheets/pure/layouts/main.css',
    '../stylesheets/pure/layouts/inventory.css',
    '../stylesheets/pure/layouts/item.css',
    '../stylesheets/pure/layouts/login.css'
  ]
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginError = false;

  constructor(
    @Inject('UserInfoApi') private service: UserInfoApi,
    private router: Router) { }

  ngOnInit() { }

  save(): void {
    this.service.login(new LoginData(this.username, this.password))
      .subscribe(userInfo => {
        this.router.navigate(['/catalog']);
      }, e => {
        this.loginError = true;
      })
  }
}