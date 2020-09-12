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
        public AccounttypeRepository(ApplicationDbContext context) : base(context)
        { }
        public IEnumerable<AccountType> GetAllAccounttypes()
        {
            return _appContext.AccountTypes
                .OrderBy(c => c.AccountTypeName)
                .ToList();
        }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}
