using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Interfaces;
using Server.Models;
using Server.Repositories.Interfaces;

namespace Server.Repositories.MariaDB
{
    public class ListPersoRepository : IListPersoRepository
    {
        private readonly mangafilrouge_bddContext context;
        public ListPersoRepository(mangafilrouge_bddContext Context)
        {
            context = Context;
        }

        public ListPerso AddListPerso(ListPerso listPerso)
        {
            this.context.ListPersos.Add(listPerso);
            this.context.SaveChanges();
            return listPerso;
        }

        public void DeleteListPerso(int id)
        {
            this.context.ListPersos.Remove(this.context.ListPersos.FirstOrDefault(a => a.UserId == id));
        }

        public ListPerso GetListPerso(int id)
        {
            ListPerso listPerso = this.context.ListPersos.FirstOrDefault(a => a.UserId == id && a.AnimeId == id);

            if(listPerso != null)
            {
                listPerso.Anime = this.context.Animes.FirstOrDefault(r => r.Id == id);
            }
            return listPerso;
        }
        public IEnumerable<ListPerso> GetListPersosByUserId(int id)
        {
            List<ListPerso> listPersos = this.context.ListPersos.Where(a => a.UserId == id).ToList();

            if (listPersos != null)
            {
                foreach (var listPerso in listPersos)
                {
                    listPerso.Anime = this.context.Animes.FirstOrDefault(r => r.Id == listPerso.AnimeId);
                    //listPerso.User = this.context.Users.FirstOrDefault(u => u.Id == listPerso.UserId);
                    listPerso.CategoryListPerso = this.context.CategoryListPersos.FirstOrDefault(c => c.Id == listPerso.CategoryListPersoId);
                }
            }
            return listPersos;
        }


        public IEnumerable<ListPerso> GetListPersos()
        {
            return this.context.ListPersos.ToList();
        }

        public ListPerso UpdateListPerso(ListPerso listPerso)
        {
            this.context.ListPersos.Update(listPerso);
            this.context.SaveChanges();
            return listPerso;
        }
    }
}
