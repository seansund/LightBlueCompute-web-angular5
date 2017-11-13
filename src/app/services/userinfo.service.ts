import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';

import { UserInfoApi } from './userinfo.api';

import { UserState } from '../models/userstate.model';
import { LoginData } from '../models/login.model';

import { environment } from '../../environments/environment';

const authUrl = environment.authEndpoint;
const sessionKey = 'currentUser';

@Injectable()
export class UserInfoService implements UserInfoApi {
  _state: UserState;

  constructor(private http: Http) {}

  login(loginData: LoginData): Observable<UserState> {
    return this.http.post(authUrl, JSON.stringify(loginData))
      .switchMap((response, index) => {
        // TODO fix this
        let user: UserState = {
          username: loginData.username,
          accessToken: response['data'].accessToken,
          authenticated: true
        };
        this.currentUser = user;
        return [user];
      });
  }
  logout(): void {
    sessionStorage.removeItem('currentUser');
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