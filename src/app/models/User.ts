export class User {
  id: number = 0;
  name: string = '';
  email: string = '';
  password: string = '';
}
export class Token {
  access_token: string = '';
  token_type: string = '';
  expires_in: number = 0;
}
