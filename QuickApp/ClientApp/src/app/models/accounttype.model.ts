export class Accounttype {
    
  constructor(id?: Number, accountTypeName?: string, accountTypeShortName?: string, CreatedBy?: string, UpdatedBy?: string, CreatedDate?: string, UpdatedDate?: string) {

    this.Id = id;
    this.AccountTypeName = accountTypeName;
    this.AccountTypeShortName = accountTypeShortName;
        this.CreatedBy = CreatedBy;
        this.UpdatedBy = UpdatedBy;
        this.CreatedDate = CreatedDate;
        this.UpdatedDate = UpdatedDate;
    }

  public Id: Number;
  public AccountTypeName: string;
  public AccountTypeShortName: string;
  public CreatedBy: string;
  public UpdatedBy: string;
  public CreatedDate: string;
  public UpdatedDate: string;
}
