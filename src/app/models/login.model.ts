export class LoginData {
  grantType: string = 'password';
  scope: string = 'blue';
  username: string;
  password: string;
  clientId: string;

  constructor(username?: string, password?: string) {
    this.username = username;
    this.password = password;
  }
}