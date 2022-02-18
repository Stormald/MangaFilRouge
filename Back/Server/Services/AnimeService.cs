using Server.Interfaces;
using Server.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class AnimeService : IAnimeService
    {
        private readonly IAnimeRepository repo;
        public AnimeService(IAnimeRepository Repo)
        {
            repo = Repo;
        }

        public IAnime AddAnime(IAnime anime)
        {
            return this.repo.AddAnime(anime);
        }

        public void DeleteAnime(int id)
        {
            this.repo.DeleteAnime(id);
        }

        public IAnime GetAnime(int id)
        {
            return this.repo.GetAnime(id);
        }

        public IEnumerable<IAnime> GetAnimes()
        {
            return this.repo.GetAnimes();
        }

        public IAnime UpdateAnime(IAnime anime)
        {
            return this.repo.UpdateAnime(anime);
        }
    }
}
