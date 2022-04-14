using Server.Models;
using Server.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
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
            List<User> users = this.usersRepository.FindAll() as List<User>;

            return users;
        }

        public User GetUserById(int id)
        {
            User user = this.usersRepository.FindById(id);

            return user;
        }

        public User CreateUser(User user)
        {
            user.Password = ProtectPassword(user.Password);
            this.usersRepository.Add(user);

            return user;
        }

        public User UpdateUser(User user)
        {
            this.usersRepository.Update(user);
            return user;
        }

        public string DeleteUser(int id)
        {
            this.usersRepository.Delete(id);
            return "user succefully deleted.";
        }

        private static string ProtectPassword(string clearPassword)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(clearPassword);
            byte[] protectedBytes = ProtectedData.Protect(bytes, null, DataProtectionScope.CurrentUser);
            return Convert.ToBase64String(protectedBytes);
        }
    }
}
