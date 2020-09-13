export class Accounttype {
    
  constructor(id?: Number, accountTypeName?: string, accountTypeShortName?: string, CreatedBy?: string, UpdatedBy?: string, CreatedDate?: Date, UpdatedDate?: Date) {

        this.id = id;
        this.accountTypeName = accountTypeName;
        this.accountTypeShortName = accountTypeShortName;
        this.CreatedBy = CreatedBy;
        this.UpdatedBy = UpdatedBy;
        this.CreatedDate = CreatedDate;
        this.UpdatedDate = UpdatedDate;
    }

  public id: Number;
  public accountTypeName: string;
  public accountTypeShortName: string;
  public CreatedBy: string;
  public UpdatedBy: string;
  public CreatedDate: Date;
  public UpdatedDate: Date;
}
