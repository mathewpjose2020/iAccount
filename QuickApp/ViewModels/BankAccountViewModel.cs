using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickApp.ViewModels
{
    public class BankAccountViewModel
    {
        public int Id { get; set; }
        public string AccountNo { get; set; }
        public string AccountHolderName { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public DateTime DateofBirth { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string ContactNo { get; set; }
        public string ContactEmail { get; set; }
        public int AccountTypeId { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }

    public class AccountViewModelValidator : AbstractValidator<BankAccountViewModel>
    {
        public AccountViewModelValidator()
        {
            RuleFor(register => register.AccountHolderName).NotEmpty().WithMessage("Account Holder name cannot be empty");
            RuleFor(register => register.AccountNo).NotEmpty().WithMessage("Account no cannot be empty");
            RuleFor(register => register.Country).NotEmpty().WithMessage("Country cannot be empty");
            RuleFor(register => register.State).NotEmpty().WithMessage("State cannot be empty");
            RuleFor(register => register.DateofBirth).NotEmpty().WithMessage("Date of Birth cannot be empty");
            RuleFor(register => register.ContactEmail).NotEmpty().WithMessage("Contact Email cannot be empty");
            RuleFor(register => register.ContactNo).NotEmpty().WithMessage("Phone number cannot be empty");
            RuleFor(register => register.AccountTypeId).NotEmpty().WithMessage("Account type cannot be empty");
            RuleFor(register => register.Address).NotEmpty().WithMessage("Address cannot be empty");
        }
    }
}
