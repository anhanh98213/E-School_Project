import { Injectable } from '@angular/core';

import {User} from '../../models/user'
import {Observable, from, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { getUser } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, ) { }

  getTypeUser(username, password): Observable<User>{
    return this.http.post<User>(getUser.api, {username, password}).pipe(
      
      map(userData => {
        return userData}),
      catchError(error => of(null)))
  }
   
}
