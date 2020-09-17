import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LocalStoreManager } from './local-store-manager.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Accounttype } from '../models/accounttype.model';
import { BankAccounts } from '../models/bankaccounts.model';


@Injectable({ providedIn: 'root' })

export class BankAccountsService {

  public url: string;
  public accounttypes: Accounttype[];
  public bankAccounts: BankAccounts[];

  private heroesUrl = 'api/BankAccount/';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient, private router: Router,
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

  getBankAccounts(): Observable<BankAccounts[]> {
    return this.http.get<BankAccounts[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched bank accounts')),
        catchError(this.handleError<BankAccounts[]>('getHeroes', []))
      );
  }

  addBankAccount(hero): Observable<BankAccounts> {
    return this.http.post<BankAccounts>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: BankAccounts) => this.log(`added bank account w/ id=${newHero.Id}`)),
      catchError(this.handleError<BankAccounts>('addHero'))
    );
  }

}
