import { Injectable } from '@angular/core';

import { User, Token } from '../../models/user'
import {Observable, from, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { api } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, ) { }

  getRoleUser(username, password): Observable<User> {
    return this.http.post<Token>(api.getUser, { username, password }).pipe(
      map(userData => {
        if(userData.status.message == 'Success')
        {
          return userData.data
        } else{
          return null
        }
      }),
      catchError(error => of(null)))
  }
}


