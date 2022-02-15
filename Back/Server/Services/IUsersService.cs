using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IUsersService
    {
        List<User> GeyAllUser();

        User GetUserById(string id);

        User CreateUser(User user);

        User UpdateUser(User user);

        string DeleteUser(string id);
    }
}
