using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IBankAccountRepository : IRepository<BankAccount>
    {
        IEnumerable<BankAccount> GetAllAccounts();

        Task<(bool Succeeded, string[] Errors)> CreateBankAccount(BankAccount BankAccount);
    }
}
