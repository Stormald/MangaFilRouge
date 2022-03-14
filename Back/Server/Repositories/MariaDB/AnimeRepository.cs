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

        public Anime AddAnime(Anime anime)
        {
            this.context.Animes.Add(anime);
            this.context.SaveChanges();
            return anime;
        }

        public void DeleteAnime(int id)
        {
            this.context.Animes.Remove(this.context.Animes.FirstOrDefault(a => a.Id == id));
        }

        public Anime GetAnime(int id)
        {
            Anime anime = this.context.Animes.FirstOrDefault(a => a.Id == id);

            if(anime != null)
            {
                anime.Reviews = this.context.Reviews.Where(r => r.AnimeId == id).ToList();
            }
            return anime;
        }

        public IEnumerable<Anime> GetAnimes()
        {
            return this.context.Animes.ToList();
        }

        public Anime UpdateAnime(Anime anime)
        {
            this.context.Animes.Update(anime);
            this.context.SaveChanges();
            return anime;
        }
    }
}
