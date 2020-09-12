using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickApp.ViewModels
{
    public class AccounttypeViewModel
    {
        public int Id { get; set; }
        public string AccountTypeName { get; set; }
        public string AccountTypeShortName { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }

    public class AccounttypeViewModelValidator : AbstractValidator<AccounttypeViewModel>
    {
        public AccounttypeViewModelValidator()
        {
            RuleFor(register => register.AccountTypeName).NotEmpty().WithMessage("Account Type name cannot be empty");
            RuleFor(register => register.AccountTypeShortName).NotEmpty().WithMessage("Account Type Short name cannot be empty");
        }
    }
}
