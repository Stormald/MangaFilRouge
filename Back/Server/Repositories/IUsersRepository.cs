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

        User FindById(string id);

        void Add(User user);

        void Update(User user);

        void Delete(string id);
    }
}
