import {Observable} from 'rxjs/Observable';

import {LoginData} from '../models/login.model';
import {UserState} from '../models/userstate.model';

export interface UserInfoApi {
  login(loginData: LoginData): Observable<UserState>;
  logout(): void;
  currentUser: UserState;
}