using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IAccounttypeRepository : IRepository<AccountType>
    {
        IEnumerable<AccountType> GetAllAccounttypes();
        Task<(bool Succeeded, string[] Errors)> CreateAccountType(AccountType AccountType);
    }
}
