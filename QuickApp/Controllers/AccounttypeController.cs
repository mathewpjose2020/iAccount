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
    public class AccounttypeController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;
        private readonly IEmailSender _emailSender;
        private readonly IAccounttypeRepository _accounttyperepository;

        public AccounttypeController(IAccounttypeRepository accounttyperepository,IMapper mapper, IUnitOfWork unitOfWork, ILogger<AccounttypeController> logger, IEmailSender emailSender)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;
            _emailSender = emailSender;
            _accounttyperepository = accounttyperepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var allAccounttypes = _unitOfWork.Accounttypes.GetAllAccounttypes();
            //return Ok(_mapper.Map<IEnumerable<AccounttypeViewModel>>(allAccounttypes));
            return Ok(allAccounttypes);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value: " + id;
        }



        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]AccountType AccountType)
        {
            var result = _accounttyperepository.CreateAccountType(AccountType);
            return Ok(AccountType);
        }



        // PUT api/values/5
        [HttpPut]
        public void Put([FromBody]AccountType AccountType)
        {
        }



        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}