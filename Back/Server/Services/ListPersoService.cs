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

        public void DeleteListPerso(int id)
        {
            this.repo.DeleteListPerso(id);
        }

        public IListPerso GetListPerso(int id)
        {
            return this.repo.GetListPerso(id);
        }

        public IListPerso GetListPersoByUserIdAndAnimeId(int userId, int animeId)
        {
            return this.repo.GetListPersoByUserIdAndAnimeId(userId, animeId);
        }

        public IEnumerable<IListPerso> GetListPersos()
        {
            return this.repo.GetListPersos();
        }
        public IEnumerable<IListPerso> GetListPersosByUserId(int id)
        {
            return this.repo.GetListPersosByUserId(id);
        }


        public IListPerso UpdateListPerso(ListPerso listPerso)
        {
            return this.repo.UpdateListPerso(listPerso);
        }
    }
}
