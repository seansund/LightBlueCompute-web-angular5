export class AccessToken {
  constructor(private access_token?: string) {}

  toString(): string {
    return this.access_token ? this.access_token : '';
  }
}
