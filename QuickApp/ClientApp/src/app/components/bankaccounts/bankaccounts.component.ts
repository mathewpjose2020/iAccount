import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';


@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.scss'],
  animations: [fadeInOut]
})
export class BankAccountsComponent {

}
