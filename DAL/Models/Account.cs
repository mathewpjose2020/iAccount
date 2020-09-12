using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using DAL.Models.Interfaces;

namespace DAL.Models
{
    public class Account : IAuditableEntity
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
        public AccountType AccountType { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
