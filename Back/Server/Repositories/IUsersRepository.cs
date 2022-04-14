using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories
{
    public interface IUsersRepository
    {
        IEnumerable<User> FindAll();

        User FindById(int id);

        void Add(User user);

        void Update(User user);

        void Delete(int id);
    }
}
