using Server.Models;
using Server.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository usersRepository;

        public UsersService(IUsersRepository usersRepository)
        {
            this.usersRepository = usersRepository;
        }

        public List<User> GeyAllUser()
        {
            try
            {
                List<User> users = this.usersRepository.FindAll() as List<User>;

                return users;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public User GetUserById(string id)
        {
            try
            {
                User user = this.usersRepository.FindById(id);

                return user;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public User CreateUser(User user)
        {
            try
            {
                this.usersRepository.Add(user);

                return user;
            }
            catch (Exception e)
            {
                throw new Exception (e.Message);
            }
        }

        public User UpdateUser(User user)
        {
            throw new NotImplementedException();
        }

        public string DeleteUser(string id)
        {
            throw new NotImplementedException();
        }
    }
}
