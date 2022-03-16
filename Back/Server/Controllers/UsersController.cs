using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        /// <summary>
        /// this function get all user in data base and return a list.
        /// </summary>
        /// <returns>List of user.</returns>
        [HttpGet]
        public IActionResult Get()
        {
            var listUser = this.usersService.GeyAllUser();

            if (listUser == null)
            {
                throw new ArgumentNullException("No users were found.");
            }

            return this.Ok(listUser);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = this.usersService.GetUserById(id);

            if (user == null)
            {
                throw new ArgumentNullException($"The user was not found..");
            }

            return this.Ok(user);
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            var newUser = this.usersService.CreateUser(user);
            return this.Ok(newUser);
        }

        [HttpPost("authenticate")]
        public IActionResult Autenthicate(UserCredential userCredential)
        {
            var currentUser = this.usersService.GeyAllUser()
                .FirstOrDefault( user => user.Email == userCredential.Login && UnprotectPassword(user.Password) == userCredential.Password);

            if (currentUser == null)
            {
                return NotFound("user not found.\nMaybe the login or password is wrong.");
            }

            return this.Ok(currentUser);
        }

        static string UnprotectPassword(string protectedPassword)
        {
            byte[] protectedBytes = Convert.FromBase64String(protectedPassword);
            byte[] bytes = ProtectedData.Unprotect(protectedBytes, null, DataProtectionScope.CurrentUser);
            return Encoding.UTF8.GetString(bytes);
        }
    }

    public class UserCredential
    {
        public string Login { get; set; }

        public string Password { get; set; }
    }
}
