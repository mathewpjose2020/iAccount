
export class Accounttype {
    
  constructor(id?: string, accountTypeName?: string, accountTypeShortName?: string, CreatedBy?: string, UpdatedBy?: string, CreatedDate?: string, UpdatedDate?: string) {

        this.id = id;
        this.accountTypeName = accountTypeName;
        this.accountTypeShortName = accountTypeShortName;
        this.CreatedBy = CreatedBy;
        this.UpdatedBy = UpdatedBy;
        this.CreatedDate = CreatedDate;
        this.UpdatedDate = UpdatedDate;
    }

  public id: string;
  public accountTypeName: string;
  public accountTypeShortName: string;
  public CreatedBy: string;
  public UpdatedBy: string;
  public CreatedDate: string;
  public UpdatedDate: string;
}
