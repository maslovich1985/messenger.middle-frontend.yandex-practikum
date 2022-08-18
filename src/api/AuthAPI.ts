import { IUserData } from '../common/Store';

import HTTPTransport from '../common/HTTPTransport';

export interface SignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SignInData {
  login: string;
  password: string;
}

export default class AuthAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/auth');
  }

  signUp(data: SignUpData): Promise<string> {
    return this.http.post('/signup', data);
  }

  signIn(data: SignInData): Promise<string> {
    return this.http.post('/signin', data);
  }

  logout(): Promise<string> {
    return this.http.post('/logout');
  }

  read(): Promise<IUserData> {
    return this.http.get('/user');
  }
}
