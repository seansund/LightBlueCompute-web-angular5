import { AccessToken } from './accesstoken.model';

export class UserState {
  accessToken: AccessToken;
  authenticated: boolean;
  username: string;
}
