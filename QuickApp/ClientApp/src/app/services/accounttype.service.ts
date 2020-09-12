import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { LocalStoreManager } from './local-store-manager.service';
import { OidcHelperService } from './oidc-helper.service';
import { ConfigurationService } from './configuration.service';
import { DBkeys } from './db-keys';
import { JwtHelper } from './jwt-helper';
import { Utilities } from './utilities';
import { AccessToken, LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';
import { PermissionValues } from '../models/permission.model';
import { Accounttype } from '../models/accounttype.model';

@Injectable()
export class AccounttypeService {

  public url: string;
  public accounttypes: Accounttype[];
  public http: HttpClient;

  constructor(
    private router: Router,
    private oidcHelperService: OidcHelperService,
    private configurations: ConfigurationService,
    private localStorage: LocalStoreManager) {

  }

  testMethod() {
    this.url = this.router.url;
    return this.http.get<Accounttype[]>(this.url + 'api/Accounttype/Get').subscribe(result => {
      this.accounttypes = result;
    }, error => console.error(error));
  }
}
