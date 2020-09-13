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
    public class AccounttypeRepository : Repository<AccountType>, IAccounttypeRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
        public AccounttypeRepository(ApplicationDbContext context) : base(context)
        { }
        public IEnumerable<AccountType> GetAllAccounttypes()
        {
            return _appContext.AccountTypes
                .OrderBy(c => c.AccountTypeName)
                .ToList();
        }

        public async Task<(bool Succeeded, string[] Errors)> CreateAccountType(AccountType AccountType)
        {
            var result = await _appContext.AccountTypes.AddAsync(AccountType);
            _appContext.SaveChanges();
            //if (!result)
            //    return (false, result.Errors.Select(e => e.Description).ToArray());

            return (true, new string[] { });
        }

        
    }
}
