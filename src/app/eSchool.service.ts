import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { api } from './models/api';
import { CountGuardian, CountLecturer, CountManager, CountStudent } from './models/user';


@Injectable({
  providedIn: 'root'
})

export class ESchoolService {
    constructor(private http: HttpClient){}

    getNumberOfStudent() : Observable<CountStudent["data"]>{
      return this.http.get<CountStudent>(api.getCountStudent).pipe(
        map(count => {
          return count.data    
        }),
        catchError(error => of(null)))
    }

    getNumberOfManager() : Observable<CountManager["data"]>{
      return this.http.get<CountManager>(api.getCountManager).pipe(
        map(count => {
          return count.data    
        }),
        catchError(error => of(null)))
    }

    getNumberOfLecturer() : Observable<CountLecturer["data"]>{
      return this.http.get<CountLecturer>(api.getCountLecturer).pipe(
        map(count => {
          return count.data    
        }),
        catchError(error => of(null)))
    }

    getNumberOfGuardian() : Observable<CountGuardian["data"]>{
      return this.http.get<CountGuardian>(api.getCountGuardian).pipe(
        map(count => {
          return count.data    
        }),
        catchError(error => of(null)))
    }
  
}
