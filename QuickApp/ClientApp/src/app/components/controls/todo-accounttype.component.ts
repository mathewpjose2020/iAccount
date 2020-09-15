import { Component, OnInit, OnDestroy, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { AppTranslationService } from '../../services/app-translation.service';
import { LocalStoreManager } from '../../services/local-store-manager.service';
import { Utilities } from '../../services/utilities';
import { AccounttypeService } from '../../services/accounttype.service';
import { Accounttype } from '../../models/accounttype.model';



@Component({
  selector: 'app-todo-accounttype',
  templateUrl: './todo-accounttype.component.html',
    styleUrls: ['./todo-accounttype.component.scss']
})
export class TodoAccountTypeComponent implements OnInit, OnDestroy {
  public static readonly DBKeyTodoDemo = 'todo-demo.todo_list';
  public accounttype: Accounttype  = {
    Id: 0,
    AccountTypeName: '',
   AccountTypeShortName: '',
    CreatedBy: '',
    CreatedDate: new Date(),//this.datepipe.transform(new Date(), 'yyyy-MMM-dd'),
    UpdatedBy: '',
    UpdatedDate: new Date(),//this.datepipe.transform(new Date(), 'yyyy-MMM-dd'),
  };

  rows = [];
  rowsCache = [];
  columns = [];
  editing = {};
  taskEdit: any = {};
  isDataLoaded = false;
  loadingIndicator = true;
  formResetToggle = true;
  _currentUserId: string;
  _hideCompletedTasks = false;


  get currentUserId() {
    if (this.authService.currentUser) {
      this._currentUserId = this.authService.currentUser.id;
    }

    return this._currentUserId;
  }


  set hideCompletedTasks(value: boolean) {

    if (value) {
      this.rows = this.rowsCache.filter(r => !r.completed);
    } else {
      this.rows = [...this.rowsCache];
    }


    this._hideCompletedTasks = value;
  }

  get hideCompletedTasks() {
    return this._hideCompletedTasks;
  }


  @Input()
  verticalScrollbar = false;


  @ViewChild('statusHeaderTemplate', { static: true })
  statusHeaderTemplate: TemplateRef<any>;

  @ViewChild('statusTemplate', { static: true })
  statusTemplate: TemplateRef<any>;

  @ViewChild('nameTemplate', { static: true })
  nameTemplate: TemplateRef<any>;

  @ViewChild('createdonTemplate', { static: true })
  createdonTemplate: TemplateRef<any>;

  @ViewChild('descriptionTemplate', { static: true })
  descriptionTemplate: TemplateRef<any>;

  @ViewChild('actionsTemplate', { static: true })
  actionsTemplate: TemplateRef<any>;

  @ViewChild('editorModal', { static: true })
  editorModal: ModalDirective;


  constructor(private accounttypeService: AccounttypeService, public datepipe: DatePipe, private alertService: AlertService, private translationService: AppTranslationService, private localStorage: LocalStoreManager, private authService: AuthService) {

  }



  ngOnInit() {
    this.loadingIndicator = true;

    this.fetch((data) => {
      this.refreshDataIndexes(data);
      this.rows = data;
      this.rowsCache = [...data];
      this.isDataLoaded = true;

      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });


    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
        { prop: 'name', name: gT('todoAccountType.management.Accounttype'), cellTemplate: this.nameTemplate, width: 200 },
        { prop: 'description', name: gT('todoAccountType.management.Shortname'), cellTemplate: this.descriptionTemplate, width: 100 },
        { prop: 'createdon', name: gT('todoAccountType.management.Createdon'), cellTemplate: this.nameTemplate, width: 200 },
      { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
  }

  ngOnDestroy() {
    this.saveToDisk();
  }



  fetch(cb) {
      let data = this.getFromDisk();
      data = [
          { name: 'Savings Account', description: 'SB', createdon:'12/09/2020'},
          { name: 'Fixed Deposit', description: 'FD', createdon: '12/09/2020' },
          { name: 'Current Account', description: 'CA', createdon: '12/09/2020' },
          { name: 'Overdraft Account', description: 'OD', createdon: '12/09/2020'},
          { name: 'Demat Account', description: 'DA', createdon: '12/09/2020' },
      ];

    if (data == null) {
      setTimeout(() => {

        data = this.getFromDisk();

        if (data == null) {
          data = [
            { name: 'Create visual studio extension', description: 'Create a visual studio VSIX extension package that will add this project as an aspnet-core project template' },
            { name: 'Do a quick how-to writeup', description: '' },
            { name: 'Create aspnet-core/Angular tutorials based on this project', description: 'Create tutorials (blog/video/youtube) on how to build applications (full stack)' +
                ' using aspnet-core/Angular. The tutorial will focus on getting productive with the technology right away rather than the details on how and why they work so audience can get onboard quickly.'
            },
          ];
        }

        cb(data);
      }, 1000);
    } else {
      cb(data);
    }
  }


  refreshDataIndexes(data) {
    let index = 0;

    for (const i of data) {
      i.$$index = index++;
    }
  }


  onSearchChanged(value: string) {
    this.rows = this.rowsCache.filter(r =>
      Utilities.searchArray(value, false, r.name, r.description) ||
      value === 'important' && r.important ||
      value === 'not important' && !r.important);
  }


  showErrorAlert(caption: string, message: string) {
    this.alertService.showMessage(caption, message, MessageSeverity.error);
  }


  addTask() {
    this.formResetToggle = false;

    setTimeout(() => {
      this.formResetToggle = true;

      this.taskEdit = {};
      this.editorModal.show();
    });
  }

  //save() {
  //  this.rowsCache.splice(0, 0, this.taskEdit);
  //  this.rows.splice(0, 0, this.taskEdit);
  //  this.refreshDataIndexes(this.rowsCache);
  //  this.rows = [...this.rows];

  //  this.saveToDisk();
  //  this.editorModal.hide();
  //}

  save() {
      this.accounttype = {
        Id: 0,
        AccountTypeName: '',
        AccountTypeShortName: '',
        CreatedBy: '',
        CreatedDate: new Date(),//this.datepipe.transform(new Date(), 'yyyy-MMM-dd'),
        UpdatedBy: '',
        UpdatedDate: new Date(),//this.datepipe.transform(new Date(), 'yyyy-MMM-dd'),
    };
    let accountType = {};

    let accountTypeobj = [];  
    
    this.accounttype.AccountTypeName = this.taskEdit.description;
    this.accounttype.AccountTypeShortName = this.taskEdit.name;
    accountType = {
      Id: this.accounttype.Id,
      AccountTypeName: this.accounttype.AccountTypeName,
      AccountTypeShortName: this.accounttype.AccountTypeShortName,
      CreatedBy: this.accounttype.CreatedBy,
      CreatedDate: this.accounttype.CreatedDate,
      UpdatedBy: this.accounttype.UpdatedBy,
      UpdatedDate: this.accounttype.UpdatedDate
    };
    var accountTypeObj = JSON.stringify(accountType);
    this.accounttypeService.addAccounttype(accountTypeObj)
        .subscribe(accounttype => {
          this.accounttype = accounttype;
        });
    }


  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
    this.rows = [...this.rows];

    this.saveToDisk();
  }


  delete(row) {
    this.alertService.showDialog('Are you sure you want to delete the account type?', DialogType.confirm, () => this.deleteHelper(row));
  }


  deleteHelper(row) {
    this.rowsCache = this.rowsCache.filter(item => item !== row);
    this.rows = this.rows.filter(item => item !== row);

    this.saveToDisk();
  }

  getFromDisk() {
      return this.localStorage.getDataObject(`${TodoAccountTypeComponent.DBKeyTodoDemo}:${this.currentUserId}`);
  }

  saveToDisk() {
    if (this.isDataLoaded) {
        this.localStorage.saveSyncedSessionData(this.rowsCache, `${TodoAccountTypeComponent.DBKeyTodoDemo}:${this.currentUserId}`);
    }
  }
}
