using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly mangafilrouge_bddContext context;

        public UsersRepository(mangafilrouge_bddContext context)
        {
            this.context = context;
        }

        public void Add(User user)
        {
            this.context.Users.Add(user);
            this.context.SaveChanges();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> FindAll()
        {
            return this.context.Users.ToList();
        }

        public User FindById(int id)
        {
            return this.context.Users.FirstOrDefault(user => user.Id == id);
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
