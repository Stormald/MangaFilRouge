using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
using Server.Models;
using Server.Repositories.Interfaces;

namespace Server.Repositories.MariaDB
{
    public class MangaAmateurRepository : IMangaAmateurRepository
    {
        private readonly mangafilrouge_bddContext context;
        public MangaAmateurRepository(mangafilrouge_bddContext Context)
        {
            context = Context;
        }

        public MangaAmateur AddMangaAmateur(MangaAmateur mangaAmateur)
        {
            this.context.MangaAmateurs.Add(mangaAmateur);
            this.context.SaveChanges();
            return mangaAmateur;
        }

        public void DeleteMangaAmateur(int id)
        {
            this.context.MangaAmateurs.Remove(this.context.MangaAmateurs.FirstOrDefault(e => e.Id == id));
        }

        public IMangaAmateur GetMangaAmateur(int id)
        {
            return this.context.MangaAmateurs.FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<IMangaAmateur> GetMangaAmateurs()
        {
            return this.context.MangaAmateurs.ToList();
        }

        public IMangaAmateur UpdateMangaAmateur(MangaAmateur mangaAmateur)
        {
            this.context.MangaAmateurs.Update(mangaAmateur);
            this.context.SaveChanges();
            return mangaAmateur;
        }
    }
}
