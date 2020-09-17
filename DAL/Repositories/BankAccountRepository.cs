using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DAL.Models;
using DAL.Repositories.Interfaces;

namespace DAL.Repositories
{
    public class BankAccountRepository : Repository<BankAccount>, IBankAccountRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
        public BankAccountRepository(ApplicationDbContext context) : base(context)
        { }
        public IEnumerable<BankAccount> GetAllAccounts()
        {
            return _appContext.BankAccounts
                .OrderBy(c => c.AccountHolderName)
                .ToList();
        }

        public async Task<(bool Succeeded, string[] Errors)> CreateBankAccount(BankAccount BankAccount)
        {
            var result = await _appContext.BankAccounts.AddAsync(BankAccount);
            _appContext.SaveChanges();

            return (true, new string[] { });
        }

    }
}
