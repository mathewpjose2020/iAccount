export class BankAccounts {
    
  constructor(id?: Number, AccountNo?: string, AccountHolderName?: string, Address?: string, Country?: string,
    State?: string, DateofBirth?: Date, Age?: Number, Sex?: string, ContactNo?: string, ContactEmail?: string,
    AccountTypeId?: Number, CreatedBy?: string, UpdatedBy?: string,CreatedDate?: Date, UpdatedDate?: Date) {

    this.Id = id;
    this.AccountNo = AccountNo;
    this.AccountHolderName = AccountHolderName;
    this.Address = Address;
    this.Country = Country;
    this.State = State;
    this.DateofBirth = DateofBirth;
    this.Age = Age;
    this.Sex = Sex;
    this.ContactNo = ContactNo;
    this.ContactEmail = ContactEmail;
    this.State = State;
    this.AccountTypeId = AccountTypeId;
    this.CreatedBy = CreatedBy;
    this.UpdatedBy = UpdatedBy;
    this.CreatedDate = CreatedDate;
    this.UpdatedDate = UpdatedDate;
    }

  public Id: Number;
  public AccountNo: string;
  public AccountHolderName: string;
  public Address: string;
  public Country: string;
  public State: string;
  public DateofBirth: Date;
  public Age: Number;
  public Sex: string;
  public ContactNo: string;
  public ContactEmail: string;
  public AccountTypeId: Number;
  public CreatedBy: string;
  public UpdatedBy: string;
  public CreatedDate: Date;
  public UpdatedDate: Date;
}
