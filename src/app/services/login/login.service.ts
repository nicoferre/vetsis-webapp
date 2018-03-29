import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8088/vetsis/v1/security/login', { username: username, password: password })
      .map((user: IUser) => {
        if (Object.keys(user).length !== 0) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
