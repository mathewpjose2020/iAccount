using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL;
using QuickApp.ViewModels;
using AutoMapper;
using Microsoft.Extensions.Logging;
using QuickApp.Helpers;
using DAL.Repositories;
using DAL.Models;
using DAL.Repositories.Interfaces;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankAccountController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;
        private readonly IEmailSender _emailSender;
        private readonly IBankAccountRepository _bankAccountRepository;

        public BankAccountController(IBankAccountRepository bankAccountRepository, IMapper mapper, IUnitOfWork unitOfWork, ILogger<AccounttypeController> logger, IEmailSender emailSender)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;
            _emailSender = emailSender;
            _bankAccountRepository = bankAccountRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var allBankAccounts = _unitOfWork.BankAccounts.GetAllAccounts();
            //return Ok(_mapper.Map<IEnumerable<BankAccountViewModel>>(allAccounts));
            return Ok(allBankAccounts);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value: " + id;
        }



        // POST api/values
        [HttpPost]
        public IActionResult Post(BankAccount BankAccount)
        {
            var result = _unitOfWork.BankAccounts.CreateBankAccount(BankAccount);
            return Ok(BankAccount);
        }



        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }



        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}