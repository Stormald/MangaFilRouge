using Server.Interfaces;
using Server.Models;
using Server.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class ListPersoService : IListPersoService
    {
        private readonly IListPersoRepository repo;
        public ListPersoService(IListPersoRepository Repo)
        {
            repo = Repo;
        }
        public IListPerso AddListPerso(ListPerso listPerso)
        {
            return this.repo.AddListPerso(listPerso);
        }

        //public void DeleteListPerso(int id)
        //{
        //    this.repo.DeleteListPerso(id);
        //}


        public IEnumerable<IListPerso> GetListsPerso()
        {
            return this.repo.GetListsPerso();
        }

        public IListPerso UpdateListPerso(ListPerso listPerso)
        {
            return this.repo.UpdateListPerso(listPerso);
        }
    }
}
