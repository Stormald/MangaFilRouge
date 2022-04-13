using Server.Interfaces;
using Server.Models;
using Server.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class MangaAmateurService : IMangaAmateurService
    {
        private readonly IMangaAmateurRepository repo;
        public MangaAmateurService(IMangaAmateurRepository Repo)
        {
            repo = Repo;
        }

        public IMangaAmateur AddMangaAmateur(MangaAmateur mangaAmateur)
        {
            return this.repo.AddMangaAmateur(mangaAmateur);
        }

        public void DeleteMangaAmateur(int id)
        {
            this.repo.DeleteMangaAmateur(id);
        }

        public IMangaAmateur GetMangaAmateur(int id)
        {
            return this.repo.GetMangaAmateur(id);
        }

        public IEnumerable<IMangaAmateur> GetMangaAmateurs()
        {
            return this.repo.GetMangaAmateurs();
        }

        public IMangaAmateur UpdateMangaAmateur(MangaAmateur mangaAmateur)
        {
            return this.repo.UpdateMangaAmateur(mangaAmateur);
        }
    }
}
