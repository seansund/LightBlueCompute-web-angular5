import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';

import { UserInfoApi } from './userinfo.api';

import { UserState } from '../models/userstate.model';
import { LoginData } from '../models/login.model';
import { AccessToken } from '../models/accesstoken.model';

import { environment } from '../../environments/environment';

const authUrl = environment.authEndpoint;
const sessionKey = 'currentUser';

@Injectable()
export class UserInfoMock implements UserInfoApi {
  _state: UserState;

  constructor() {}

  login(loginData: LoginData): Observable<UserState> {
    this.currentUser = {
      username: loginData.username,
      accessToken: new AccessToken('xxxx'),
      authenticated: true
    };
    return Observable.create(observer => {
      observer.next(this.currentUser);
      observer.complete();
    });
  }
  logout(): void {
    this.currentUser = null;
  }

  get currentUser(): UserState {
    if (!this._state) {
      this._state = JSON.parse(sessionStorage.getItem('currentUser'));
    }
    return this._state;
  }
  set currentUser(currentUser: UserState) {
    this._state = currentUser;
    if (currentUser) {
      sessionStorage.setItem(sessionKey, JSON.stringify(currentUser));
    } else {
      sessionStorage.removeItem(sessionKey);
    }
  }
}