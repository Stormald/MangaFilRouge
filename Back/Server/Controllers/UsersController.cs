using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
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
            try
            {
                var listUser = this.usersService.GeyAllUser();

                if (listUser == null)
                {
                    throw new ArgumentNullException("No users were found.");
                }

                return this.Ok(listUser);
            }
            catch(ArgumentNullException e)
            {
                return this.NotFound(e.Message);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult Get(string id)
        {
            try
            {
                var user = this.usersService.GetUserById(id);

                if (user == null)
                {
                    throw new ArgumentNullException($"The user was not found..");
                }

                return this.Ok(user);
            }
            catch(ArgumentNullException ex)
            {
                return this.NotFound(ex.Message);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            try
            {
                var newUser = this.usersService.CreateUser(user);
                return this.Ok(newUser);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
