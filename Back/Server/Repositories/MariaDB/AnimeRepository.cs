using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
using Server.Models;
using Server.Repositories.Interfaces;

namespace Server.Repositories.MariaDB
{
    public class AnimeRepository : IAnimeRepository
    {
        private readonly mangafilrouge_bddContext context;
        public AnimeRepository(mangafilrouge_bddContext Context)
        {
            context = Context;
        }

        public IAnime AddAnime(IAnime anime)
        {
            return (IAnime)this.context.Animes.Add(anime as Anime);
        }

        public void DeleteAnime(int id)
        {
            this.context.Animes.Remove(this.context.Animes.FirstOrDefault(e => e.Id == id));
        }

        public IAnime GetAnime(int id)
        {
            return this.context.Animes.FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<IAnime> GetAnimes()
        {
            return this.context.Animes.ToList();
        }

        public IAnime UpdateAnime(IAnime anime)
        {
            return (IAnime)this.context.Animes.Update(anime as Anime);
        }
    }
}
