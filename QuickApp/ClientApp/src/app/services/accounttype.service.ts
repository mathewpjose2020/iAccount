import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

import { LocalStoreManager } from './local-store-manager.service';
//import { OidcHelperService } from './oidc-helper.service';
//import { ConfigurationService } from './configuration.service';
//import { DBkeys } from './db-keys';
//import { JwtHelper } from './jwt-helper';
//import { Utilities } from './utilities';
//import { AccessToken, LoginResponse } from '../models/login-response.model';
//import { User } from '../models/user.model';
//import { PermissionValues } from '../models/permission.model';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Accounttype } from '../models/accounttype.model';


@Injectable({ providedIn: 'root' })

 export class AccounttypeService {

  public url: string;
  public accounttypes: Accounttype[];

  private heroesUrl = 'api/Accounttype/';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,private router: Router,
    private localStorage: LocalStoreManager) {

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.error(message);
  }

  getaccounttypes(): Observable<Accounttype[]> {
    return this.http.get<Accounttype[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Accounttype[]>('getHeroes', []))
      );
  }

  addAccounttype(hero): Observable<Accounttype> {
    return this.http.post<Accounttype>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Accounttype) => this.log(`added account type w/ id=${newHero.Id}`)),
      catchError(this.handleError<Accounttype>('addHero'))
    );
  }

}
